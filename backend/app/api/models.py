from fastapi import APIRouter

router = APIRouter()


@router.get("/models")
def get_models():

    return [
        {
            "id":1,
            "name":"CNN Vision Model",
            "accuracy":96.5,
            "status":"Active"
        },
        {
            "id":2,
            "name":"Transformer AI Model",
            "accuracy":98.2,
            "status":"Training"
        },
        {
            "id":3,
            "name":"Detection Model",
            "accuracy":94.8,
            "status":"Inactive"
        }
    ]