from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class FinanceRequest(BaseModel):
    salary: float
    expense: float
    savings: float
    food: float
    rent: float
    travel: float
    other: float


@router.get("/finance")
def get_finance():

    salary = 60000
    expense = 20000
    savings = 5000

    return {
        "salary": salary,
        "expense": expense,
        "savings": savings,
        "saving_rate": round((savings / salary) * 100, 2),
        "expense_ratio": round((expense / salary) * 100, 2),
        "remaining": salary - expense + savings,
        "projection_1y": savings * 12,
        "projection_5y": savings * 12 * 5,
        "expense_breakdown": {
            "food": 5000,
            "rent": 8000,
            "travel": 2000,
            "other": 5000
        }
    }


@router.post("/finance")
def calculate_finance(data: FinanceRequest):

    saving_rate = (data.savings / data.salary) * 100
    expense_ratio = (data.expense / data.salary) * 100
    remaining = data.salary - data.expense + data.savings

    return {
        "salary": data.salary,
        "expense": data.expense,
        "savings": data.savings,
        "saving_rate": round(saving_rate, 2),
        "expense_ratio": round(expense_ratio, 2),
        "remaining": remaining,
        "projection_1y": data.savings * 12,
        "projection_5y": data.savings * 12 * 5,
        "expense_breakdown": {
            "food": data.food,
            "rent": data.rent,
            "travel": data.travel,
            "other": data.other
        }
    }