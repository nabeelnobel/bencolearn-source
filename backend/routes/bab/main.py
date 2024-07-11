from fastapi import APIRouter
from var import API_DEV

babURL = APIRouter()

@babURL.get("/bab/rafflesia")
async def babRafflesiaurl():
    data = [
        {
            "head":"Rafflesia",
            "desc":"Materi kali ini akan membahas tentang salah satu flora yang terkenal di Bengkulu yaitu Bunga Rafflesia"   
        },
        {
            "head":"Sejarah Bunga Rafflesia",
            "desc":"videos",
            "href"  :"/videos/rafflesia1"
        },
        {
            "head":"Morfologi Bunga Rafflesia",
            "desc":"videos",
            "href"  :"/videos/rafflesia2"
        },
        {
            "head":"Quiz 1 Rafflesia",
            "desc":"quiz",
            "href":"/quiz/rafflesia1"
        },
        {
            "head":"Quiz 2 Rafflesia",
            "desc":"quiz",
            "href":"/quiz/rafflesia2"
        },
        {
            "head":"Quiz 3 Rafflesia",
            "desc":"quiz",
            "href":"/quiz/rafflesia3"
        },
        {
            "head":"Quiz 4 Rafflesia",
            "desc":"quiz",
            "href":"/quiz/rafflesia4"
        },
        {
            "head":"Quiz 5 Rafflesia",
            "desc":"quiz",
            "href":"/quiz/rafflesia5"
        },
    ]   
    return data


@babURL.get("/bab/bangkai")
async def babBangkaiUrl():
    data = [
        {
            "head":"Bunga Bangkai",
            "desc":"Bunga bangkai atau dalam bahasa Latin disebut dengan Amorphophallus titanum adalah tanaman asli dari Sumatra, Indonesia. "   
        },
        {
            "head":"Bunga Bangkai",
            "desc":"videos",
            "href"  :"/videos/bangkai1"
        },
        {
            "head":"Fakta Bunga Bangkai",
            "desc": "article",
            "href"  :"/article/bangkai1"
        },
        {
            "head":"Quiz 1 Bunga Bangkai",
            "desc":"quiz",
            "href":"/quiz/bangkai1"
        }
    ]   
    return data

@babURL.get("/bab/beruang")
async def babBeruangUrl():
    data = [
        {
            "head":"Beruang Madu",
            "desc":"Beruang madu dikenal dengan warna bulunya yang hitam kecoklatan dan memiliki warna putih di dada. Mereka juga memiliki cakar yang kuat untuk menggali makanan seperti madu dan serangga."   
        },
        {
            "head":"Video Beruang Madu",
            "desc":"videos",
            "href"  :"/videos/beruang1"
        },
        {
            "head":"Quiz 1 Beruang Madu",
            "desc":"quiz",
            "href":"/quiz/beruang1"
        }
    ]   
    return data

@babURL.get("/bab/kacamata")
async def babKacamataUrl():
    data = [
        {
            "head":"Kacamata Enggano",
            "desc":"Burung Kacamata Enggano atau Zosterops salvadorii adaah salah satu jenis burung kicauan yang merupakan burung endemik Pulau Enggano, Bengkulu."
        },
        {   
            "head":"Video Kacamata Enggano",
            "desc":"videos",
            "href"  :"/videos/kacamata1"
        },
        {
            "head":"Quiz 1 Kacamata Enggano",
            "desc":"quiz",
            "href":"/quiz/kacamata1"
        },
        {
            "head":"Quiz 2 Kacamata Enggano",
            "desc":"quiz",
            "href":"/quiz/kacamata2"
        }
    ]   
    return data

@babURL.get("/bab/pakaian")
async def babKacamataUrl():
    data = [
        {
            "head":"Pakaian Adat Bengkulu",
            "desc":"Pakaian adat, adalah kostum yang mengekspresikan identitas, yang biasanya dikaitkan dengan wilayah geografis atau periode waktu dalam sejarah."
        },
        {   
            "head":"Video Pakaian Adat",
            "desc":"videos",
            "href"  :"/videos/pakaian1"
        },
        
    ]   
    return data

@babURL.get("/bab/tarian")
async def babKacamataUrl():
    data = [
        { 
            "head":"Tarian Adat Bengkulu",
            "desc":"Tari rakyat atau tari tradisional adalah tarian yang tumbuh di kalangan rakyat, ragam tarian rakyat tumbuh menurut letak geografis, seperti daerah pegunungan, dan pesisir pantai."
        },
        {   
            "head":"Artikel Tarian Kejei dan Lalan Belek",
            "desc":"article",
            "href"  :"/article/tarian1"
        },
        {   
            "head":"Artikel Tarian Tabut",
            "desc":"article",
            "href"  :"/article/tarian2"
        },
        {   
            "head":"Quiz 1 Tarian Adat",
            "desc":"quiz",
            "href"  :"/quiz/tarian1"
        },
        {   
            "head":"Quiz 2 Tarian Adat",
            "desc":"quiz",
            "href"  :"/quiz/tarian2"
        },
        {   
            "head":"Quiz 3 Tarian Adat",
            "desc":"quiz",
            "href"  :"/quiz/tarian3"
        },
    ]   
    return data

@babURL.get("/bab/suku")
async def babSukuUrl():
    data = [
        { 
            "head":"Suku-suku Bengkulu",
            "desc":"suku adalah golongan orang-orang dalam keluarga yang seturunan atau golongan bangsa sebagai bagian dari bangsa yang besar."
        },
        {   
            "head":"Suku di Bengkulu",
            "desc":"video",
            "href"  :"/videos/suku1"
        },
        {   
            "head":"Quiz 1 Suku",
            "desc":"quiz",
            "href"  :"/quiz/suku1"
        },
        {   
            "head":"Quiz 2 Suku",
            "desc":"quiz",
            "href"  :"/quiz/suku2"
        },
        {   
            "head":"Quiz 3 Suku",
            "desc":"quiz",
            "href"  :"/quiz/suku3"
        },
        {   
            "head":"Quiz 4 Suku",
            "desc":"quiz",
            "href"  :"/quiz/suku4"
        },
    ]   
    return data

@babURL.get("/bab/kaganga")
async def babKagangaUrl():
    data = [
        { 
            "head":"Aksara Kaganga DALAM PERBAIKAN",
            "desc":"Aksara Kaganga merupakan sebuah nama kumpulan beberapa aksara yang berkerabat di Sumatra sebelah selatan."
        },
        {   
            "head":"Penjelasan Aksara Kaganga",
            "desc":"video",
            "href"  :"/videos/kaganga1"
        },
        {
            "head":"Aksara Ulu Rejang Konverter",
            "desc":"Translator",
            "href":"/kamus/rejangconv"
        }
    ]   
    return data

@babURL.get("/bab/bagar")
async def babLemaUrl():
    data = [
        { 
            "head":"Bagar Hiu",
            "desc":"Bagar hiu atau Bagaryu adalah makanan khas dari Bengkulu yang terbuat dari daging ikan Hiu dan dimasak seperti rendang."
        },
        {   
            "head":"Penjelasan Bagar Hiu",
            "desc":"video",
            "href"  :"/videos/bagar1"
        },
        {   
            "head":"Quiz Bagar Hiu",
            "desc":"quiz",
            "href"  :"/quiz/bagar1"
        },
    ]   
    return data

@babURL.get("/bab/lema")
async def babLemaUrl():
    data = [
        { 
            "head":"Lemea",
            "desc":"Lema adalah sebuah nama makanan khas suku Rejang. Komposisinya terdiri dari rebung yang dicincang-cincang."
        },
        {   
            "head":"Penjelasan Lemea",
            "desc":"video",
            "href"  :"/videos/lema1"
        },
        {   
            "head":"Quiz Lemea",
            "desc":"quiz",
            "href"  :"/quiz/lema1"
        },
    ]   
    return data

@babURL.get("/bab/kerajaan")
async def babRajaUrl():
    data = [
        { 
            "head":"Kerajaan di Bengkulu",
            "desc":"Kerajaan adalah sebuah pemerintahan yang dipimpin oleh raja atau ratu, yang mewarisi posisinya melalui kelahiran atau pernikahan."
        },
        {   
            "head":"Asal usul nama Bengkulu",
            "desc":"video",
            "href"  :"/videos/kerajaan1"
        },
        {   
            "head":"Kerajaan di Bengkulu",
            "desc":"video",
            "href"  :"/videos/kerajaan2"
        },
        {   
            "head":"Quiz Kerajaan",
            "desc":"quiz",
            "href"  :"/quiz/kerajaan1"
        },
    ]   
    return data

@babURL.get("/bab/benteng")
async def babBentengUrl():
    data = [
        { 
            "head":"Benteng Marlborough",
            "desc":"Benteng Marlborough adaah benteng peninggalan Inggris di Kota Bengkulu. Benteng ini didirikan oleh East India Company tahun 1714-1719 di bawah pimpinan gubernur Joseph Callet sebagai benteng pertahanan Inggris."
        },
        {   
            "head":"Video Benteng Marlborough",
            "desc":"video",
            "href"  :"/videos/benteng1"
        },
        {   
            "head":"Quiz Benteng Marlborough",
            "desc":"quiz",
            "href"  :"/quiz/benteng1"
        },
    ]   
    return data


@babURL.get("/bab/ceritalegenda")
async def babCeritaUrl():
    data = [
        { 
            "head":"Cerita Legenda",
            "desc":"Ada banyak cerita legenda yang berkembang di negara kita tercinta, khusunya Bengkulu! Yuk kita simak apa saja sih cerita legenda yang ada di provinsi Bengkulu!"
        },
        {   
            "head":"Muning Raib, kisah Bukit Kaba",
            "desc":"video",
            "href"  :"/videos/ceritalegenda1"
        },
    ]   
    return data

