from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.calendar import CalendarEvent


router = APIRouter(
    prefix="/calendar",
    tags=["Calendar"]
)


@router.get("/events")
def get_events(
    db: Session = Depends(get_db)
):

    return db.query(CalendarEvent).all()


@router.post("/events")
def create_event(
    event_data: dict,
    db: Session = Depends(get_db)
):

    event = CalendarEvent(
        title=event_data["title"],
        time=event_data.get("time", ""),
        category=event_data.get("category", "Personal"),
        date=event_data["date"]
    )

    db.add(event)
    db.commit()
    db.refresh(event)

    return event