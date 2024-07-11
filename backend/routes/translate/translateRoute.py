from fastapi import APIRouter
from routes.translate.translate import translateR

transroute = APIRouter()

@transroute.get("/translaterejang")
def translateRejang(string : str):
	res = str(translateR(string.lower()))
	print(res)
	return {"result":res}