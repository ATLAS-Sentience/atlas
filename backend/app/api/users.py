from fastapi import APIRouter

router = APIRouter()

@router.get("/users")
def get_users():
    return [
        {
            "id": 1,
            "username": "Arieve",
            "email": "arieve@atlas.ai"
        },
        {
            "id": 2,
            "username": "Vishantak",
            "email": "vb@atlas.ai"
        },
        {
            "id": 3,
            "username": "Admin",
            "email": "admin@atlas.ai"
        }
    ]