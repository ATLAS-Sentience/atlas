from fastapi import FastAPI

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