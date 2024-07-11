import API_DEV from './var'

var API_DEV2='https://ik.imagekit.io/358nabeel/'
export default function Loading(){
	return(
		<>
			<div className='purep h-penuh w-full flex flex-col items-center justify-center'>
				<div className="relative">
					<span className="text-white text-center text-[43px] font-poppinsSemiBold absolute blurry-text">Bencolearnn</span>
					<span className="text-white text-center text-[43px] font-poppinsSemiBold">Bencolearn</span>
				</div>
				<br/>
				<img 
					src={API_DEV2+'static/rabbit.png'}
					loading="lazy"
					width={300}
					height={300}
				/>
				<span className="font-bevietnam text-[16px] bg-gradient-to-r from-pink-600 to-red-500 text-transparent bg-clip-text typewriter"> Loading... </span>
			</div>
	    </>
	)
}