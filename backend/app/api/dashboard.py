from fastapi import APIRouter
from app.schemas.dashboard import DashboardResponse

router = APIRouter()


@router.get("/dashboard", response_model=DashboardResponse)
def get_dashboard():

    return {
        "users": 128,
        "models": 12,
        "running_jobs": 8,
        "accuracy": 98.7
    }