import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import API_DEV from '../../component/var'
import Link from 'next/link'
import Loading from "../../component/loading"

export default function Article(){
	const router = useRouter()
  	const { id } = router.query
  	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState(null)

  	useEffect(() => {
  		async function fetchData() {
	    	if(!id) {
      		return;
    		}
	      const response = await fetch(API_DEV+'article/'+id)
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
        <nav className="fixed top-0 left-0 z-10 w-full flex flex-row-reverse justify-between p-8">
			<span className="text-[12px] text-white font-poppinsThin text-right">Article</span>
			<span className="text-[20px] text-white font-poppinsThin text-right"><Link href="/">{"< Back"}</Link></span>
		</nav>
		<iframe src={data[0].link} className="fullframe" allowFullScreen/>
	</>)
}