import { useRouter } from 'next/router'
import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import API_DEV from '../../component/var'
import Link from 'next/link'
import Loading from "../../component/loading"

var API_DEV2='https://ik.imagekit.io/358nabeel/'

let bgTime = '';

const date = new Date();
const hour = date.getHours();

switch (true) {
  case hour >= 6 && hour < 12:
    bgTime = 'pagi';
    break;
  case hour >= 12 && hour < 18:
    bgTime = 'siang';
    break;
  case hour >= 18 && hour < 21:
    bgTime = 'sore';
    break;
  default:
    bgTime = 'malam';
    break;
}

export default function Content(){
	const router = useRouter()
  	const { id } = router.query
  	const [isLoading, setIsLoading] = useState(true)
  	const [data, setData] = useState(null)
  	const items = []

	useEffect(() => {
	    async function fetchData() {
	      const response = await fetch(API_DEV+'bab/'+id)
	      const data = await response.json()
	      setData(data)

	      setIsLoading(false);
	    }
	    fetchData()

	  }, [])

	if (isLoading) {
    return <>
      <Loading/>
    </>
  }
  	return (<>
  		<main className={`${bgTime} w-full`}>
  			<nav className="grid grid-cols-3 p-8 py-[35px]">
  				<div className="p-2">
  					<Link href="/" component={motion.div} whileTap={{ scale: 0.9 }}>
  						<img className="grid-cols-1" src={`${API_DEV2}static/back.svg`} width={7.2} height={14.4}/>
  					</Link>
  				</div>
  				<span className="grid-cols-2 col-span-1 text-center text-white font-poppins text-[18px] md:text-[22px]">{data[0].head}</span>
  			</nav>
  			<section className="bg-[#2F2F42] w-full h-[100vh] overflow-y px-8 py-6 rounded-t-[40px]">
  				<h3 className="font-fredokaone text-[20px] text-white">{data[0].head}</h3>
  				<br/>
  				<p className="font-poppins text-[#9393A3] text-[12px]">{data[0].desc}</p>
  				<br/><br/>
  				<div className="grid grid-cols-1 gap-y-8">

  					{data.slice(1).map((item, index) => {
			        return (
			          <div key={index}>
			            <div className="grid grid-cols-4">
			  						<span className="font-poppins text-[#9393A3] text-[24px] grid-cols-1">{"0" + (parseInt(index)+1).toString()}</span>
			  						<div className="grid-cols-2 col-span-3 pl-5">
			  							<span className="font-poppins text-[14px] text-white"><Link href={item.href}>{item.head}</Link></span>
			  							<br/>
			  							<span className="font-fredokaone text-[12px] text-[#3D5CFF]">{item.desc}</span>
			  						</div>
			  					</div>
			          </div>
			        );
			      })}

  				</div>
  			</section>
  		</main>
  	</>
  	)
}