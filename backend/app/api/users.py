from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.user import User
from app.schemas.user import UserResponse, UserUpdate


router = APIRouter()

@router.get("/users", response_model=list[UserResponse])
def get_users(db: Session = Depends(get_db)):
    return db.query(User).all()


@router.get("/users/profile", response_model=UserResponse)
def get_profile(db: Session = Depends(get_db)):

    user = db.query(User).first()

    if not user:
        return {
            "id": 0,
            "username": "",
            "email": ""
        }

    return user


@router.put("/users/profile", response_model=UserResponse)
def update_profile(
    profile: UserUpdate,
    db: Session = Depends(get_db)
):

    user = db.query(User).first()

    # If no profile exists yet, create one
    if not user:
        user = User(
            username=profile.username,
            email=profile.email
        )

        db.add(user)

    else:
        # Update existing profile
        user.username = profile.username
        user.email = profile.email

    db.commit()
    db.refresh(user)

    return user