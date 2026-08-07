from sqlalchemy import Column, Integer, String, Float

from app.db.database import Base


class StudySession(Base):
    __tablename__ = "study_sessions"

    id = Column(Integer, primary_key=True, index=True)
    subject = Column(String, nullable=False)
    hours = Column(Float, nullable=False)
    date = Column(String, nullable=False)


class StudyGoal(Base):
    __tablename__ = "study_goals"

    id = Column(Integer, primary_key=True, index=True)
    subject = Column(String, nullable=False)
    target = Column(Float, nullable=False)
    