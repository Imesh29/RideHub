from sqlalchemy.orm import Session

from app.repository.user_repository import UserRepository

from app.core.security import (
    hash_password,
    verify_password,
    create_access_token
)


class AuthService:

    @staticmethod
    def register(
        db: Session,
        name: str,
        email: str,
        password: str
    ):

        existing_user = (
            UserRepository.get_by_email(
                db,
                email
            )
        )

        if existing_user:

            raise ValueError(
                "Email already exists"
            )

        user = (
            UserRepository.create_user(
                db,
                {
                    "name": name,
                    "email": email,
                    "password": hash_password(password)
                }
            )
        )

        return user

    @staticmethod
    def login(
        db: Session,
        email: str,
        password: str
    ):

        user = (
            UserRepository.get_by_email(
                db,
                email
            )
        )

        if not user:

            raise ValueError(
                "Invalid credentials"
            )

        if not verify_password(
            password,
            user.password
        ):
            raise ValueError(
                "Invalid credentials"
            )

        token = create_access_token(
            {
                "sub": str(user.id)
            }
        )

        return token