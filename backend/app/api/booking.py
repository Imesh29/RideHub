from uuid import UUID

from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.dependencies import get_current_user

from app.models.user import User

from app.schemas.booking import (
    BookingCreate,
    BookingUpdate,
    BookingResponse
)

from app.services.booking_service import BookingService

router = APIRouter(
    prefix="/bookings",
    tags=["Bookings"]
)


@router.get(
    "/",
    response_model=list[BookingResponse]
)
def get_bookings(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return BookingService.get_active_bookings(db)


@router.get(
    "/archived",
    response_model=list[BookingResponse]
)
def get_archived_bookings(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return BookingService.get_archived_bookings(db)


@router.get(
    "/search",
    response_model=list[BookingResponse]
)
def search_bookings(
    q: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return BookingService.search_bookings(
        db,
        q
    )


@router.get(
    "/{booking_id}",
    response_model=BookingResponse
)
def get_booking(
    booking_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    try:

        return BookingService.get_booking(
            db,
            booking_id
        )

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e)
        )


@router.post(
    "/",
    response_model=BookingResponse,
    status_code=201
)
def create_booking(
    payload: BookingCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    try:

        return BookingService.create_booking(
            db,
            payload.model_dump()
        )

    except ValueError as e:

        raise HTTPException(
            status_code=400,
            detail=str(e)
        )


@router.put(
    "/{booking_id}",
    response_model=BookingResponse
)
def update_booking(
    booking_id: UUID,
    payload: BookingUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    try:

        return BookingService.update_booking(
            db,
            booking_id,
            payload.model_dump(
                exclude_unset=True
            )
        )

    except ValueError as e:

        raise HTTPException(
            status_code=400,
            detail=str(e)
        )


@router.patch(
    "/{booking_id}/archive",
    response_model=BookingResponse
)
def archive_booking(
    booking_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    try:

        return BookingService.archive_booking(
            db,
            booking_id
        )

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e)
        )


@router.patch(
    "/{booking_id}/restore",
    response_model=BookingResponse
)
def restore_booking(
    booking_id: UUID,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    try:

        return BookingService.restore_booking(
            db,
            booking_id
        )

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e)
        )