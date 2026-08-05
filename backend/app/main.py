from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.db.database import Base, engine
from app.models import User
from app.api import dashboard, users
from app.api import models

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

# Root endpoint
@app.get("/")
def root():
    return {
        "message": "Welcome to ATLAS 🚀",
        "status": "Running"
    }