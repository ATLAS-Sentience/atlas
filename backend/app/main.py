from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.db.database import Base, engine
from app.models import User
from app.api import dashboard, users
from app.api import models
from app.api.finance import router as finance_router
from app.api.study import router as study_router
from app.models.user import User
from app.models.study import StudySession, StudyGoal

# Create database tables
Base.metadata.create_all(bind=engine)

# Create FastAPI app
app = FastAPI(
    title="ATLAS API",
    description="Adaptive Twin for Learning, Analytics & Simulation",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Register API routes
app.include_router(dashboard.router)
app.include_router(users.router)
app.include_router(models.router)
app.include_router(finance_router)
app.include_router(study_router)

# Root endpoint
@app.get("/")
def root():
    return {
        "message": "Welcome to ATLAS 🚀",
        "status": "Running"
    }