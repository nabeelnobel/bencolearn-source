import { useState, useEffect } from 'react';
import API_DEV from '../../component/var'
import Link from 'next/link'
import Loading from "../../component/loading"
import { motion } from "framer-motion"

export default function KamusRejangConverter(){
	const [inputText, setInputText] = useState("");
	const [loading, setLoading] = useState(false);
	const [translatedText, setTranslatedText] = useState('');
	const [isLoading, setIsLoading] = useState(true)
  	const [list, setList] = useState(null)

	const handleTranslate = async (e) => {
		e.preventDefault(); // Prevent default form submission behavior
		setLoading(true);
		setTranslatedText('');

		try {
		  const response = await fetch(`${API_DEV}translaterejang?string=${inputText.toLowerCase()}`);
		  const data = await response.json();
		  setTranslatedText(data.result);
		} catch (error) {
		  console.error('Error:', error);
		} finally {
		  setLoading(false);
		}
	};

	useEffect(() => {
	    async function fetchData() {
		      const responseList = await fetch(API_DEV+'bab/kaganga')
		      const list = await responseList.json()
		      setList(list)

		      setIsLoading(false);
		    
	    }
	    fetchData()

	  }, [])

	if (isLoading) {
	    return <>
	      <Loading/>
	    </>
	}
	return(
		<>
			<motion.div className="rejangsmp">
				<div className="p-8">
					<nav className="flex flex-row-reverse justify-between p-8">
		  				<h1 className="text-white text-center font-fredokaone">
							<span className="text-[25px]">Konverter Aksara Ulu</span>
							<br/>
							<span className="text-[20px]">Rejang</span>
						</h1>
		  				<span className="text-[20px] text-white font-poppinsThin text-right"><Link href="/">{"<"}</Link></span>
		  			</nav>
					<div className="mt-8">
						<span className="text-[20px] text-white font-fredokaone">Indonesia</span>
							<div className="mt-2">
								<form>
									<textarea
										value={inputText} onChange={(e) => setInputText(e.target.value)} 
										placeholder="Ketik Disini!"
										className="translate w-[85vw] h-[303px] bg-[#1a1f2b] rounded-2xl border border border border-indigo-700 focus:border-indigo-400 p-4" 
									/>
								 <button onClick={handleTranslate} type="submit" className="mt-4 w-[183px] h-[47px] bg-cyan-400 rounded-2xl"><span className="text-center text-violet-800 text-[21px] font-bold font-poppins">Next</span></button>
								</form>
							</div>
					</div>
					<div className="mt-8">
						<span className="text-[20px] text-white font-fredokaone my-8">Aksara Ulu</span>
						<div className="mt-2">
							<div
								className="text-white font-rejang text-[28px] translate w-[85vw] h-[500px] bg-[#1a1f2b] rounded-2xl border border border border-[#FF4081] focus:border-indigo-400 p-4"
							>
								{translatedText}
							</div> 
						</div>
					</div>
				</div>
			</motion.div>
		</>
	)
}