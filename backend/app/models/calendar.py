from sqlalchemy import Column, Integer, String, ForeignKey

from app.db.database import Base


class CalendarEvent(Base):

    __tablename__ = "calendar_events"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    title = Column(
        String,
        nullable=False
    )

    time = Column(
        String,
        nullable=True
    )

    category = Column(
        String,
        nullable=False
    )

    date = Column(
        Integer,
        nullable=False
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=True
    )