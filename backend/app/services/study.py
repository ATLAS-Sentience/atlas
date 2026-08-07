from datetime import date
from sqlalchemy.orm import Session

from app.models.study import StudySession, StudyGoal


def get_sessions(db: Session):
    return db.query(StudySession).order_by(StudySession.id.desc()).all()


def create_session(db: Session, session):
    new_session = StudySession(
        subject=session.subject,
        hours=session.hours,
        date=str(date.today())
    )

    db.add(new_session)
    db.commit()
    db.refresh(new_session)

    return new_session


def get_goal(db: Session):
    return db.query(StudyGoal).first()


def create_goal(db: Session, goal):

    existing = db.query(StudyGoal).first()

    if existing:
        existing.subject = goal.subject
        existing.target = goal.target

        db.commit()
        db.refresh(existing)

        return existing

    new_goal = StudyGoal(
        subject=goal.subject,
        target=goal.target
    )

    db.add(new_goal)
    db.commit()
    db.refresh(new_goal)

    return new_goal