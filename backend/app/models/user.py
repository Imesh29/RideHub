from sqlalchemy import String

from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

from app.models.base import BaseModel


class User(BaseModel):

    __tablename__ = "users"

    name: Mapped[str] = mapped_column(

        String(255),
        nullable=False,

    )

    email: Mapped[str] = mapped_column(

        String(255),
        unique=True,
        nullable=False,
        index=True,

    )

    password: Mapped[str] = mapped_column(

        String(255),
        nullable=False,

    )