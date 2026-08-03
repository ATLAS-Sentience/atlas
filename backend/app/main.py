from app.db.database import Base, engine
from app.models import User

from fastapi import FastAPI
Base.metadata.create_all(bind=engine)
app = FastAPI(
    title="ATLAS API",
    description="Adaptive Twin for Learning, Analytics & Simulation",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "Welcome to ATLAS 🚀",
        "status": "Running"
    }