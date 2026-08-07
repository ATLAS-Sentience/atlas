from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db

from app.schemas.study import (
    StudySessionCreate,
    StudySessionResponse,
    StudyGoalCreate,
    StudyGoalResponse
)

from app.services.study import (
    get_sessions,
    create_session,
    get_goal,
    create_goal
)

from app.models.study import StudySession


router = APIRouter(
    prefix="/study",
    tags=["Study"]
)



@router.get(
    "/sessions",
    response_model=list[StudySessionResponse]
)
def read_sessions(db: Session = Depends(get_db)):
    return get_sessions(db)



@router.post(
    "/session",
    response_model=StudySessionResponse
)
def add_session(
    session: StudySessionCreate,
    db: Session = Depends(get_db)
):
    return create_session(db, session)



@router.get(
    "/goal",
    response_model=StudyGoalResponse | None
)
def read_goal(db: Session = Depends(get_db)):
    return get_goal(db)



@router.post(
    "/goal",
    response_model=StudyGoalResponse
)
def add_goal(
    goal: StudyGoalCreate,
    db: Session = Depends(get_db)
):
    return create_goal(db, goal)



# -----------------------------
# Study Analytics
# -----------------------------

@router.get("/analytics")
def study_analytics(
    db: Session = Depends(get_db)
):

    sessions = db.query(StudySession).all()


    total_hours = sum(
        session.hours
        for session in sessions
    )


    subjects = list(
        set(
            session.subject
            for session in sessions
        )
    )


    dates = list(
        set(
            session.date
            for session in sessions
        )
    )


    return {

        "total_hours": total_hours,

        "subjects": len(subjects),

        "streak": len(dates)

    }