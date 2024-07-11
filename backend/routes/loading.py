from fastapi import APIRouter
import httpx

loading = APIRouter()

@loading.get("/loading")
async def loadingurl():
    async with httpx.AsyncClient() as client:
        r = await client.get('https://zenquotes.io/api/random')
        return r.json()
