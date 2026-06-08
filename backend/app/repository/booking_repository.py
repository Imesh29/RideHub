from uuid import UUID

from sqlalchemy import or_
from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.booking import Booking


class BookingRepository:

    @staticmethod
    def create(
        db: Session,
        booking_data: dict
    ):

        booking = Booking(**booking_data)

        db.add(booking)

        db.commit()

        db.refresh(booking)

        return booking

    @staticmethod
    def get_by_id(
        db: Session,
        booking_id: UUID
    ):

        return (
            db.query(Booking)
            .filter(Booking.id == booking_id)
            .first()
        )

    @staticmethod
    def get_by_reference(
        db: Session,
        booking_reference: str
    ):

        return (
            db.query(Booking)
            .filter(
                Booking.booking_reference ==
                booking_reference
            )
            .first()
        )

    @staticmethod
    def get_by_chassis_number(
        db: Session,
        chassis_number: str
    ):

        return (
            db.query(Booking)
            .filter(
                Booking.chassis_number ==
                chassis_number,
                Booking.is_deleted == False
            )
            .first()
        )
    
    @staticmethod
    def get_booking_count(
        db: Session
    ):
        return (
            db.query(func.count(Booking.id))
            .scalar()
        )

    @staticmethod
    def get_all_active(
        db: Session,
        skip: int = 0,
        limit: int = 10
    ):

        return (
            db.query(Booking)
           .filter(
                Booking.is_deleted.is_(False)
            )
            .order_by(
                Booking.created_at.desc()
            )
            .offset(skip)
            .limit(limit)
            .all()  
    )    


    @staticmethod
    def get_all_archived(
        db: Session
    ):

        return (
            db.query(Booking)
            .filter(
                Booking.is_deleted == True
            )
            .order_by(
                Booking.created_at.desc()
            )
            .all()
        )

    @staticmethod
    def search(
        db: Session,
        search_term: str
    ):

        return (
            db.query(Booking)
            .filter(
                Booking.is_deleted == False
            )
            .filter(
                or_(

                    Booking.booking_reference
                    .ilike(f"%{search_term}%"),

                    Booking.customer_name
                    .ilike(f"%{search_term}%"),

                    Booking.vehicle_registration_number
                    .ilike(f"%{search_term}%"),

                    Booking.chassis_number
                    .ilike(f"%{search_term}%")
                )
            )
            .all()
        )

    @staticmethod
    def update(
        db: Session,
        booking: Booking,
        update_data: dict
    ):

        for key, value in update_data.items():

            setattr(
                booking,
                key,
                value
            )

        db.commit()

        db.refresh(booking)

        return booking

    @staticmethod
    def archive(
        db: Session,
        booking: Booking
    ):

        booking.is_deleted = True

        db.commit()

        db.refresh(booking)

        return booking

    @staticmethod
    def restore(
        db: Session,
        booking: Booking
    ):

        booking.is_deleted = False

        db.commit()

        db.refresh(booking)

        return booking