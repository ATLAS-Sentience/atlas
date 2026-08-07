from fastapi import APIRouter

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/")
def get_dashboard():

    return {
        "users": 128,
        "models": 12,
        "running_jobs": 8,
        "accuracy": 98.7
    }


@router.get("/chart")
def get_dashboard_chart():

    return [
        {"day": "Mon", "accuracy": 72},
        {"day": "Tue", "accuracy": 78},
        {"day": "Wed", "accuracy": 81},
        {"day": "Thu", "accuracy": 86},
        {"day": "Fri", "accuracy": 90},
        {"day": "Sat", "accuracy": 95},
        {"day": "Sun", "accuracy": 98},
    ]