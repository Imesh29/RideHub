from fastapi import FastAPI

from app.core.config import settings

app = FastAPI(

    title=settings.PROJECT_NAME,

    version=settings.PROJECT_VERSION,

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