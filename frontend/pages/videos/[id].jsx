import { useRouter } from 'next/router'
import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import API_DEV from '../../component/var'
import Link from 'next/link'
import Loading from "../../component/loading"
import YouTube from 'react-youtube';

var API_DEV2='https://ik.imagekit.io/358nabeel/'

const Content = (e) =>{
	return <div className="bg-[#050A11] px-3 py-3 border-4 rounded-3xl w-[85vw] border-[#7215E9] border-solid text-center">
		<div className="flex items-center">
			<div className="flex-none">
				<svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M20.5 9.90193C22.5 11.0566 22.5 13.9434 20.5 15.0981L4.75 24.1913C2.75 25.346 0.25 23.9027 0.25 21.5933V3.40673C0.25 1.09733 2.75 -0.346043 4.75 0.808657L20.5 9.90193Z" fill="url(#paint0_linear_523_20)"/>
					<defs>
						<linearGradient id="paint0_linear_523_20" x1="25" y1="12.5" x2="-8" y2="12.5" gradientUnits="userSpaceOnUse">
							<stop stopColor="#FF639C"/>
							<stop offset="1" stopColor="#F71735"/>
						</linearGradient>
					</defs>
				</svg>
			</div>
			<span className="flex-1 text-[##EB0AFF] text-[19px]">
				<Link href={e.to}><i>{e.title}</i></Link>
			</span>
		</div>
	</div>
}

export default function Videos(){
		const router = useRouter()
  	const { id } = router.query
  	const [isLoading, setIsLoading] = useState(true)
  	const [data, setData] = useState(null)
  	const [list, setList] = useState(null)
  	const items = []
		const onReady = (e) => {
	    console.log(e.target);
	  };
	  const opts = {
			playerVars : {
				controls : 0,
				rel : 0,
				fs : 1,
			}
		}

		 function handleClick() {
		    window.location.reload();
		  }

  	useEffect(() => {
	    async function fetchData() {
	    	if(id){
    			const idBab = id.replace(/\d+$/, "");
		      const response = await fetch(API_DEV+'videos/'+id)
		      const data = await response.json()
		      setData(data)

		      const responseList = await fetch(API_DEV+'bab/'+idBab)
		      const list = await responseList.json()
		      setList(list)

		      setIsLoading(false);
		    }
	    }
	    fetchData()

	  }, [])

	if (isLoading) {
    return <>
      <Loading/>
    </>
  }
  	return (<motion.div
  		 	initial={{ x: 300, opacity: 0 }}
		    animate={{ x: 0, opacity: 1 }}
		    exit={{ x: 300, opacity: 0 }}
		    transition={{
		    	duration : 3,
		    	delay : 2,
		      type: "spring",
		      stiffness: 260,
		      damping: 20,
		    }}>
  		<main className={ "videoBg w-full h-penuh"}>
  			<nav className="flex flex-row-reverse justify-between p-8">
  				<span className="text-[12px] text-white font-poppinsThin text-right">{data[0].title}</span>
  				<span className="text-[20px] text-white font-poppinsThin text-right"><Link href="/">{"< Back"}</Link></span>
  			</nav>
  			<section>
  				<div className="flex flex-col items-center items-center"> 
            <YouTube
            	videoId={data[0].link} 
            	onReady={onReady} 
            	opts={opts}
            	className="ytframe"
            />
  				</div>
  				<div className="flex flex-col items-center py-8">
  					<span className="text-white font-poppinsThin text-[22px]"><i>Bab {list[0].head}</i></span>
  					<div className="flex flex-col items-center py-12 gap-y-6 w-full">
  						{list.slice(1).map((item, index) => {
				        return (
				          <div key={index}>
				            <Content to={item.href} title={item.head}/>
				          </div>
				        );
				      })}
   					</div>
   					<span onClick={handleClick} className="text-white font-poppinsThin text-[22px]"><i>Error? Coba Refresh</i></span>
  				</div>
  			</section>
  		</main>
  	</motion.div>
  	)
}