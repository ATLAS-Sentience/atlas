from fastapi import FastAPI

from app.db.database import Base, engine
from app.models import User
from app.api import dashboard, users

# Create database tables
Base.metadata.create_all(bind=engine)

# Create FastAPI app
app = FastAPI(
    title="ATLAS API",
    description="Adaptive Twin for Learning, Analytics & Simulation",
    version="1.0.0"
)

# Register API routes
app.include_router(dashboard.router)
app.include_router(users.router)

# Root endpoint
@app.get("/")
def root():
    return {
        "message": "Welcome to ATLAS 🚀",
        "status": "Running"
    }