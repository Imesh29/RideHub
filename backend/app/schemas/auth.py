from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, field_validator
from pydantic import ConfigDict
from pydantic import EmailStr
from pydantic import field_validator


class UserCreate(BaseModel):
    @field_validator("password")
    @classmethod
    def validate_password(
        cls,
        value
    ):

        if len(value) < 6:

            raise ValueError(
                "Password must contain at least 6 characters"
            )

        return value

    name: str

    email: EmailStr

    password: str


class UserLogin(BaseModel):

    email: EmailStr

    password: str


class UserResponse(BaseModel):

    id: UUID

    name: str

    email: EmailStr

    created_at: datetime

    updated_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )


class TokenResponse(BaseModel):

    access_token: str

    token_type: str