from fastapi import FastAPI

from app.core.config import settings
from app.api.auth import router as auth_router
from app.api.booking import router as booking_router
from fastapi.middleware.cors import CORSMiddleware
from fastapi import HTTPException

from app.core.exceptions import (
    generic_exception_handler
)

app = FastAPI(

    title="Vehicle Booking Management API",

    version="1.0.0",

    description="""
    Vehicle Service Booking System

    Features:

    - Authentication
    - Booking Management
    - Search
    - Archive / Restore
    - JWT Security
    """
)

app.add_middleware(

    CORSMiddleware,

    allow_origins=[

        "http://localhost:5173",

        "http://127.0.0.1:5173"

    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]
)

app.add_exception_handler(
    Exception,
    generic_exception_handler
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

        "status": "healthy",

        "service":
        "Vehicle Booking Management API",

        "version":
        "1.0.0"

    }