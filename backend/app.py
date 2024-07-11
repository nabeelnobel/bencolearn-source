from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from routes.homepage import homepage
from routes.loading import loading
from routes.bab.main import babURL
from routes.quiz.quiz import quizRouter 
from routes.video.video import videoRouter
from routes.translate.translateRoute import transroute
from routes.markdown.mark import mark

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "This is Bencolearn backend, you are not supposed to be here"}

app.include_router(homepage)
app.include_router(loading)

app.include_router(babURL)
app.include_router(quizRouter)
app.include_router(videoRouter)
app.include_router(transroute)
app.include_router(mark)