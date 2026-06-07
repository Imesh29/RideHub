from datetime import datetime

from uuid import UUID

from pydantic import BaseModel
from pydantic import ConfigDict
from pydantic import EmailStr
from pydantic import Field

from app.models.enums import BookingStatus


class BookingBase(BaseModel):

    customer_name: str
    customer_email: EmailStr

    customer_phone: str

    vehicle_registration_number: str

    chassis_number: str

    vehicle_make: str

    vehicle_model: str

    manufacturing_year: int = Field(

        ge=1886

    )

    mileage: int = Field(

        ge=0

    )

    booking_status: BookingStatus = BookingStatus.PENDING

    booking_date: datetime

    remarks: str | None = None


class BookingCreate(BookingBase):

    pass


class BookingUpdate(BaseModel):

    customer_name: str | None = None

    customer_email: EmailStr | None = None

    customer_phone: str | None = None

    vehicle_registration_number: str | None = None

    chassis_number: str | None = None

    vehicle_make: str | None = None

    vehicle_model: str | None = None

    manufacturing_year: int | None = Field(

        default=None,

        ge=1886

    )

    mileage: int | None = Field(

        default=None,

        ge=0

    )

    booking_status: BookingStatus | None = None

    booking_date: datetime | None = None

    remarks: str | None = None


class BookingResponse(BookingBase):

    id: UUID

    booking_reference: str

    is_deleted: bool

    created_at: datetime

    updated_at: datetime

    model_config = ConfigDict(

        from_attributes=True

    )