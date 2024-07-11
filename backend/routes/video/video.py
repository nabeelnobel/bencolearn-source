from fastapi import APIRouter

videoRouter = APIRouter()

#article
@videoRouter.get("/article/tarian1")
async def artcileTarian1():
    data = [
        {
            "link":"https://tariandaerahbengkulu.carrd.co/"
        }
    ]
    return data

@videoRouter.get("/article/tarian2")
async def artcileTarian1():
    data = [
        {
            "link":"https://tariantabut.carrd.co/"
        }
    ]
    return data

@videoRouter.get("/article/bangkai1")
async def artcileBangkai1():
    data = [
        {
            "link":"https://bangkaiunik.carrd.co/#"
        }
    ]
    return data

@videoRouter.get("/article/kaganga1")
async def artcileBangkai1():
    data = [
        {
            "link":"https://kamus-rejang-kito.detektifilmuilm.repl.co?embed=true"
        }
    ]
    return data

#video
@videoRouter.get("/videos/placeholder")
async def videoTester():
    data = [
        {
            "title":"RickRoll",
            "link":"dQw4w9WgXcQ"
        }
    ]
    return data

@videoRouter.get("/videos/rafflesia1")
async def videoRafflesia1():
    data = [
    	{
    		"title":"Video 1 Rafflesia",
    		"link":"CbnM32jnP3E?playlist=CbnM32jnP3E&loop=1&enablejsapi=1"
    	}
    ]
    return data

@videoRouter.get("/videos/rafflesia2")
async def videoRafflesia2():
    data = [
        {
            "title":"Video 2 Rafflesia",
            "link":"I_1FISH6RPo?playlist=I_1FISH6RPo&loop=1&enablejsapi=1"
        }
    ]
    return data

@videoRouter.get("/videos/beruang1")
async def videoBeruang1():
    data = [
        {
            "title":"Video 1 Beruang",
            "link":"-3wqlAQcCNg?playlist=-3wqlAQcCNg&loop=1&enablejsapi=1"
        }
    ]
    return data

@videoRouter.get("/videos/kacamata1")
async def videoKacamata1():
    data = [
        {
            "title":"Video 1 Burung Enggano",
            "link":"CAXP9hr-Hho?playlist=CAXP9hr-Hho&loop=1&enablejsapi=1"
        }
    ]
    return data

@videoRouter.get("/videos/pakaian1")
async def videoPakaian1():
    data = [
        {
            "title":"Video 1 Pakaian Adat",
            "link":"fUGncucJg1Q?playlist=fUGncucJg1Q&loop=1&enablejsapi=1"
        }
    ]
    return data

@videoRouter.get("/videos/suku1")
async def videoSuku1():
    data = [
        {
            "title":"Video 1 Suku-Suku",
            "link":"iXeD0_qDc_U?playlist=iXeD0_qDc_U&loop=1&enablejsapi=1"
        }
    ]
    return data

@videoRouter.get("/videos/kaganga1")
async def videoKaganga1():
    data = [
        {
            "title":"Video 1 Kaganga",
            "link":"6J07UoNgeoM?playlist=6J07UoNgeoM&loop=1&enablejsapi=1"
        }
    ]
    return data

@videoRouter.get("/videos/lema1")
async def videoLema1():
    data = [
        {
            "title":"Video 1 Lemea",
            "link":"bCRdxzmggho?playlist=bCRdxzmggho&loop=1&enablejsapi=1"
        }
    ]
    return data

@videoRouter.get("/videos/bagar1")
async def videoBagar1():
    data = [
        {
            "title":"Video 1 Bagar Hiu",
            "link":"zTQYDsnGW3M?playlist=zTQYDsnGW3M&loop=1&enablejsapi=1"
        }
    ]
    return data

@videoRouter.get("/videos/kerajaan1")
async def videoRaja1():
    data = [
        {
            "title":"Video 1 Kerajaan",
            "link":"4QFzGNUCYiA?playlist=4QFzGNUCYiA&loop=1&enablejsapi=1"
        }
    ]
    return data

@videoRouter.get("/videos/kerajaan2")
async def videoRaja1():
    data = [
        {
            "title":"Video 2 Kerajaan",
            "link":"Pwf3ijE5K6o?playlist=Pwf3ijE5K6o&loop=1&enablejsapi=1"
        }
    ]
    return data

@videoRouter.get("/videos/benteng1")
async def videoRaja1():
    data = [
        {
            "title":"Video 1 Benteng Marlborough",
            "link":"IrmhqlQwgYA?playlist=IrmhqlQwgYA&loop=1&enablejsapi=1"
        }
    ]
    return data

@videoRouter.get("/videos/bangkai1")
async def videoBangkai1():
    data = [
        {
            "title":"Video 1 Bunga Bangkai",
            "link":"cyfxwqJLVQw?playlist=cyfxwqJLVQw&loop=1&enablejsapi=1"
        }
    ]
    return data

@videoRouter.get("/videos/ceritalegenda1")
async def videoCerita1():
    data = [
        {
            "title":"Video Muning Raib",
            "link":"E8362P46jL8?playlist=E8362P46jL8&loop=1&enablejsapi=1"
        }
    ]
    return data
