import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Lottie from 'lottie-web';
import API_DEV from '../component/var'
import { motion } from "framer-motion"
import Link from 'next/link'
import Loading from "../component/loading"
const date = new Date();
const hour = date.getHours();

function Greeting() {
  const Head = (props) =>{
    return <h1 className="font-fredokaone text-white text-[29px]">{props.greet}</h1>
  }

  if (hour >= 0 && hour < 12) {
    return <Head greet="Good Morning!"/>;
  } else if (hour >= 12 && hour < 17) {
    return <Head greet="Good Afternoon!"/>;
  } else {
    return <Head greet="Good Evening!"/>;
  }
}

export default function Home() {

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)
  const [motivation, setMotivation] = useState(null)
  const [bgTime, setBgTime] = useState('');

  const florafauna = 4

   useEffect(() => {
    async function fetchData() {
      const response = await fetch(API_DEV+'homepage')
      const data = await response.json()
      setData(data)

      const responseMotivation = await fetch(API_DEV+'loading')
      const motivation = await responseMotivation.json()
      setMotivation(motivation)
      setIsLoading(false);

    }
    fetchData()
  }, [])

   if (isLoading) {
    return <>
      <Loading/>
    </>
  }

  const Card = (props) =>{
    return <Link href={data[props.num].href}>
      <motion.div className="content-center relative sm:w-[156px] sm:h-[164px] rounded-[10px] md:w-[187px] md:h[197px] lg:w-[192px] lg:w-[202px] xs:w-[146px] xs:h-[154]"
      whileTap={{ scale: 0.9 }}
      >
        <img
          src={data[props.num].image}
          loading="lazy"
         />
        <div className="text-white font-poppins absolute text-[21px] bottom-[30px] text-center" dangerouslySetInnerHTML={ { __html: data[props.num].title } }/>
      </motion.div>
    </Link>
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <nav className="border-b-4 border-white">
        <div className="text-center py-2 drop-shadow-xl">
          <span className="font-bevietnamsemibold text-white text-[21px] drop-shadow-[2px_8px_9px_rgba(0, 0, 0, 0.5)]">Bencolearn</span>
        </div>
      </nav>
      <main>
        <section className="m-4">
          <Greeting />
          <div className="text-white font-bevietnam text-[12px]">
            <span dangerouslySetInnerHTML={ { __html: motivation[0].h } }/>
          </div>     
        </section>
        <section className="bg-purpbg w-full h-[700px] rounded-t-[40px]">
          <div className="m-4 py-5 grid gap-5 md:gap-10 lg:gap-y-14 grid-cols-1 ">
            <section id="florafauna" className="gap-y-5">
              <span className="text-white font-fredokaone text-[21px]">
                Flora dan Fauna <br/> di Bengkulu
              </span>
              <br/><br/> 
              <div className="grid gap-x-5 md:gap-y-10 lg:gap-y-14 gap-y-2 grid-cols-2">
                <Card num={0}/>
                <Card num={1}/>
                <Card num={2}/>
                <Card num={3}/> 
              </div>
            </section>
            <section id="budaya">
              <span className="text-white font-fredokaone text-[21px]">
                Budaya dan Suku
              </span>
              <br/><br/> 
              <div className="grid gap-x-5 md:gap-y-10 lg:gap-y-14 gap-y-2 grid-cols-2">
                <Card num={4}/>
                <Card num={5}/>
                <Card num={6}/>
                <Card num={7}/> 
              </div>
            </section>
            <section id="makanan">
              <span className="text-white font-fredokaone text-[21px]">
                Makanan Khas
              </span>
              <br/><br/> 
              <div className="grid gap-x-5 grid-cols-2">
                <Card num={8}/>
                <Card num={9}/>
              </div>
            </section>
            <section id="sejarah">
              <span className="text-white font-fredokaone text-[21px]">
                Sejarah
              </span>
              <br/><br/> 
              <div className="grid gap-x-5 gap-y-2 grid-cols-2">
                <Card num={10}/>
                <Card num={11}/>
                <Card num={12}/>
              </div>
              <div className="w-full h-[4vh]"><p className="text-purpbg">Hai</p></div>
            </section>
             <motion.div  whileHover={{ scale: 0.7 }} className="flex justify-center mb-3">
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-poppinsBold text-[23px] text-center py-2 w-[90vw] mb-4">
                  <Link href='/about'>About Bencolearn</Link>
                </span>
              </motion.div>
              <div className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-format="auto"
               data-full-width-responsive="true"></div>
              <span className="mb-5 font-poppinsLight text-center text-white text-[10px]">Dongeng Bengkulu dan Game Edukasi COMING SOON!</span>
              <span className="mb-5 font-poppinsThin text-center text-white text-[10px]">&copy; 2023 Bencolearn 1.2</span>
          </div>
        </section>
      </main>
    </motion.div>
  )
}

