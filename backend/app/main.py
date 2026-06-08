from fastapi import FastAPI

from app.core.config import settings
from app.api.auth import router as auth_router
from app.api.booking import router as booking_router
app = FastAPI(

    title=settings.PROJECT_NAME,
    version=settings.PROJECT_VERSION,

)

app.include_router(
    auth_router
)

app.include_router(
    booking_router
)

@app.get("/")

def home():

    return {

        "message": "Vehicle Booking Management API",

        "version": settings.PROJECT_VERSION,

        "status": "Running"

    }


@app.get("/health")

def health():

    return {

        "status": "healthy"

    }