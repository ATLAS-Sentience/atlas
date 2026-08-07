from pydantic import BaseModel


class StudySessionCreate(BaseModel):
    subject: str
    hours: float


class StudySessionResponse(BaseModel):
    id: int
    subject: str
    hours: float
    date: str

    class Config:
        from_attributes = True


class StudyGoalCreate(BaseModel):
    subject: str
    target: float


class StudyGoalResponse(BaseModel):
    id: int
    subject: str
    target: float

    class Config:
        from_attributes = True