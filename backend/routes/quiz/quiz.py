from fastapi import APIRouter
from routes.quiz.main import txt_to_json

quizRouter = APIRouter()

@quizRouter.get("/quiz/{text}", tags=["quiz"])
async def read_user(text: str):
    data = txt_to_json("question/"+text+".txt")
    return data