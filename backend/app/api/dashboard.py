from fastapi import APIRouter

router = APIRouter()

@router.get("/dashboard")
def get_dashboard():
    return {
    "users": 128,
    "models": 12,
    "running_jobs": 8,
    "accuracy": 98.7
}