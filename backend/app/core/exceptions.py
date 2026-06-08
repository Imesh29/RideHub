from fastapi import Request
from fastapi import HTTPException

from fastapi.responses import JSONResponse


async def generic_exception_handler(
    request: Request,
    exc: Exception
):

    return JSONResponse(
        status_code=500,
        content={

            "success": False,

            "message":
            "Internal server error"
        }
    )