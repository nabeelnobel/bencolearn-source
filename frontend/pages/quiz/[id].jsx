import { useRouter } from 'next/router'
import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import API_DEV from '../../component/var'
import Lottie from 'lottie-web';
import Link from 'next/link'
import Loading from "../../component/loading"
import { Dialog } from '@headlessui/react'

var API_DEV2='https://ik.imagekit.io/358nabeel/'

function ScoreMessage({ score }) {
  let message;

  if (score >= 100) {
    message = "Keep it up!";
  } else if (score >= 80) {
    message = "Amazing!";
  } else if (score >= 75) {
    message = "Be careful!";
  } else if (score >= 50) {
    message = "Try again!";
  } else {
    message = "Better luck next time!";
  }

  return (
    <div>
      {message}
    </div>
  );
}

export default function Content(){
	let [showModal, setShowModal] = useState(false)

	const router = useRouter()
	const { id } = router.query
	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState(null)
	const items = []

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}else{
			setShowModal(true)
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < data.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	useEffect(() => {
	    async function fetchData() {

	    	if(!id) {
      		return;
    		}
	      const response = await fetch(API_DEV+'quiz/'+id)
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
	  				{showScore ? (
							<div className='h-full w-full score flex flex-col items-center justify-center'>
								<span className="text-white text-center text-[43px] font-poppinsSemiBold">Score</span>
								<br/>
								<span className="text-white text-center text-[109px] font-poppinsSemiBold">{(100/data.length)*score}</span>
								<br/>
								<span className="text-white text-center text-[45px] font-poppinsSemiBold"><ScoreMessage score={(100/data.length)*score} /></span>
								<button className="btn btn-accent"><Link href="/">Back to Menu</Link></button>
							</div>
						) : (
							<>

								{showModal ? (
					        <>
					          <div
					            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
					          >
					            <div className="relative w-auto my-6 mx-auto max-w-3xl">
					              {/*content*/}
					              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#050A11] outline-none focus:outline-none">
					                {/*header*/}
					                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
					                  <h3 className="text-3xl font-smibold text-white">
					                    Oops Kamu salah! Hati hati ya
					                  </h3>
					                  <button
					                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
					                    onClick={() => setShowModal(false)}
					                  >
					                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
					                      ×
					                    </span>
					                  </button>
					                </div>
					                {/*body*/}
					                <div className="relative p-6 flex-auto">
					                  <p className="my-4 text-white text-lg leading-relaxed">
					                    Jawaban yang benar adalah : {data[currentQuestion-1].answerOptions.find((option) => option.isCorrect).answerText}
					                  </p>
					                </div>
					                {/*footer*/}
					                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
					                  <button
					                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					                    type="button"
					                    onClick={() => setShowModal(false)}
					                  >
					                    Close
					                  </button>
					                </div>
					              </div>
					            </div>
					          </div>
					          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
					        </>
					      ) : null}

							<main className="quiz h-full w-full ">
				  			<nav className="grid grid-cols-3 p-8 py-[35px]">
				  				<div className="p-2">
				  					<Link href="/" component={motion.div} whileTap={{ scale: 0.9 }}>
				  						<img className="grid-cols-1" src={`${API_DEV2}static/back.svg`} width={7.2} height={14.4}/>
				  					</Link>
				  				</div>
				  				<span className="grid-cols-2 col-span-1 text-center text-white font-poppins text-[22px] md:text-[27px]">Quiz</span>
				  			</nav>
				  			<br/>
				  			<section className="p-8">
								<div className='question-section'>
									<div className='h-[171px] w-full border-dotted border-4 border-white flex items-center justify-center rounded-[30px]'>
										<span className='text-[20px] text-center white text-white'>{data[currentQuestion].questionText}</span>
									</div>
								</div>
								<br/><br/>
								<div className='grid gap-4 grid-rows-1'>
									{data[currentQuestion].answerOptions.map((answerOption) => (
										<>
											<button className="btn btn-primary rounded-90" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}><span className="white">{answerOption.answerText}</span></button>	
										</>
									))}
								</div>
							</section>
  						</main>
							</>
						)}
  	</>
  	)
}