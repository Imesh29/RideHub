from datetime import datetime

from sqlalchemy import Boolean
from sqlalchemy import Enum
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text

from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

from app.models.base import BaseModel
from app.models.enums import BookingStatus


class Booking(BaseModel):

    __tablename__ = "bookings"

    booking_reference: Mapped[str] = mapped_column(

        String(50),
        unique=True,
        index=True,
        nullable=False,

    )

    customer_name: Mapped[str] = mapped_column(

        String(255),

        nullable=False,

    )

    customer_email: Mapped[str] = mapped_column(

        String(255),

        nullable=False,

    )

    customer_phone: Mapped[str] = mapped_column(

        String(20),

        nullable=False,

    )

    vehicle_registration_number: Mapped[str] = mapped_column(

        String(50),

        nullable=False,

    )

    chassis_number: Mapped[str] = mapped_column(

        String(100),

        unique=True,
        index=True,
        nullable=False,

    )

    vehicle_make: Mapped[str] = mapped_column(

        String(100),

        nullable=False,

    )

    vehicle_model: Mapped[str] = mapped_column(

        String(100),

        nullable=False,

    )

    manufacturing_year: Mapped[int] = mapped_column(

        Integer,

        nullable=False,

    )

    mileage: Mapped[int] = mapped_column(

        Integer,
        nullable=False,

    )

    booking_status: Mapped[BookingStatus] = mapped_column(

        Enum(BookingStatus),
        default=BookingStatus.PENDING,
        nullable=False,

    )

    booking_date: Mapped[datetime] = mapped_column(

        nullable=False,

    )

    remarks: Mapped[str | None] = mapped_column(

        Text,
        nullable=True,

    )

    is_deleted: Mapped[bool] = mapped_column(

        Boolean,
        default=False,
        nullable=False,

    )