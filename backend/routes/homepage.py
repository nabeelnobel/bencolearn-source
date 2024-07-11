from fastapi import APIRouter
from var import API_DEV

API_DEV2 = 'https://ik.imagekit.io/358nabeel/'
homepage = APIRouter()
def content(title, url, href):
    return {"title":title, "image":API_DEV2+"static/"+url+".png", "href":"/content/"+url}

title = ["Rafflesia", "Bunga <br/> Bangkai", "Beruang <br/> Madu", "Kacamata <br/> Enggano", "Pakaian <br/> Adat", "Tarian <br/> Daerah", "Suku <br/> Suku", "Kaganga", "Lemea", "Bagar <br/> Hiu", "Kerajaan", "Benteng Marlborough", "Cerita Legenda"]

url = ["rafflesia", "bangkai", "beruang", "kacamata", "pakaian", "tarian", "suku", "kaganga", "lema", "bagar", "kerajaan", "benteng", "ceritalegenda"]
    

@homepage.get("/homepage/")
def homepageurl():
    data = []
    for i in range(len(title)) :
        data.append(content(title[i], url[i], url[i]))
    # pprint(data)
    return data