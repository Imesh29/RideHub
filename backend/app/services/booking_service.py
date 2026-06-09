from datetime import datetime
from uuid import UUID


from sqlalchemy.orm import Session

from app.models.booking import Booking

from app.repository.booking_repository import (
    BookingRepository
)


class BookingService:

    @staticmethod
    def generate_booking_reference(
        db: Session
    ):

        current_year = datetime.now().year

        booking_count = (
            BookingRepository.get_booking_count(db)
        )
 
        return (
            f"BK-{current_year}-{booking_count + 1:05d}"
        )

    @staticmethod
    def create_booking(
        db: Session,
        booking_data: dict
    ):

        existing_chassis = (
            BookingRepository
            .get_by_chassis_number(
                db,
                booking_data["chassis_number"]
            )
        )

        if existing_chassis:

            raise ValueError(
                "Chassis number already exists"
            )

        booking_data[
            "booking_reference"
        ] = (
            BookingService
            .generate_booking_reference(db)
        )

        return (
            BookingRepository.create(
                db,
                booking_data
            )
        )

    @staticmethod
    def get_booking(
        db: Session,
        booking_id: UUID
    ):

        booking = (
            BookingRepository.get_by_id(
                db,
                booking_id
            )
        )

        if not booking:

            raise ValueError(
                "Booking not found"
            )

        return booking

    @staticmethod
    def get_active_bookings(
        db: Session,
        skip: int = 0,
        limit: int = 10
    ):

        return (
            BookingRepository
            .get_all_active(
                db,
                skip,
                limit
            )
        )

    @staticmethod
    def get_archived_bookings(
        db: Session
    ):

        return (
            BookingRepository
            .get_all_archived(db)
        )

    @staticmethod
    def search_bookings(
        db: Session,
        search_term: str
    ):

        return (
            BookingRepository.search(
                db,
                search_term
            )
        )

    @staticmethod
    def update_booking(
        db: Session,
        booking_id: UUID,
        update_data: dict
    ):

        booking = (
            BookingRepository.get_by_id(
                db,
                booking_id
            )
        )

        if not booking:

            raise ValueError(
                "Booking not found"
            )

        if (
            "chassis_number"
            in update_data
        ):

            existing = (
                BookingRepository
                .get_by_chassis_number(
                    db,
                    update_data[
                        "chassis_number"
                    ]
                )
            )

            if (
                existing
                and existing.id != booking.id
            ):

                raise ValueError(
                    "Chassis number already exists"
                )

        return (
            BookingRepository.update(
                db,
                booking,
                update_data
            )
        )

    @staticmethod
    def archive_booking(
        db: Session,
        booking_id: UUID
    ):

        booking = (
            BookingRepository.get_by_id(
                db,
                booking_id
            )
        )

        if not booking:

            raise ValueError(
                "Booking not found"
            )

        return (
            BookingRepository.archive(
                db,
                booking
            )
        )

    @staticmethod
    def restore_booking(
        db: Session,
        booking_id: UUID
    ):

        booking = (
            BookingRepository.get_by_id(
                db,
                booking_id
            )
        )

        if not booking:

            raise ValueError(
                "Booking not found"
            )

        return (
            BookingRepository.restore(
                db,
                booking
            )
        )