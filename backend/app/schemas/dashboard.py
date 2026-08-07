from pydantic import BaseModel

class DashboardResponse(BaseModel):
    users: int
    models: int
    running_jobs: int
    accuracy: float