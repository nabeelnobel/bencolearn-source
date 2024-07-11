import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import API_DEV from '../component/var'
import { motion } from "framer-motion"
import Link from 'next/link'
import Loading from "../component/loading"

function Paragraph(props){
	return <p className="leading-8 indent-8 text-justify font-poppins text-white text-[15px]">
		{props.children}
	</p>
}

function BiographyCard({ name, birthDate, className, role }){
	return (
		<div className={`bg-white rounded-lg shadow-md w-[80vw] mb-3`}>
	      <div className="p-4">
	        <h2 className="text-purple-500 text-[20px] font-semibold">{name}</h2>
	        <p className="mt-2 text-gray-600 text-[15px]">Tanggal Lahir	: {birthDate}</p>
	        <p className="mt-2 text-gray-600 text-[15px]">Sekolah		: {className}</p>
	        <p className="mt-2 text-gray-600 text-[15px]">Sebagai		: {role}</p>
	      </div>
	    </div>
    )
}

export default function About(){
	return (<>
		<div className="flex justify-center">
			<ul class="background1 pb-4">
			<div className="background1-wrap">
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			</div>
			   	<nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-row-reverse justify-between p-4 ">
  					<span className="text-[12px] text-white font-poppinsThin text-right"><b>About</b></span>
  					<span className="text-[20px] text-white font-poppinsThin text-right"><Link href="/"><b>{"< Back"}</b></Link></span>
  			   </nav>
  			   <br/>
  			   <section className="text-center m-4 p-4 rounded-lg">
  			   		<h1 className="font-poppinsBold text-white text-[30px]"><b>About Us</b></h1>
  			   		<br/>
  			   		<Paragraph>
			   			<b>Apa itu <i>Bencolearn?</i></b> Bencolearn adalah sebuah aplikasi yang dirancang dan dibuat oleh 
			   			siswa <b>SMPN 1 REJANG LEBONG</b> khusus sebagai media edukasi digital terhadap budaya Bengkulu tercinta.
			   			Aplikasi ini dibuat melalui bimbingan guru pembimbing <b>Ma'am Anisa, M.Pd.Si.</b> dan <b>5 Siswa SMPN 1 REJANG LEBONG</b>
  			   		</Paragraph>
  			   		<br/>
  			   		<Paragraph>
  			   			<b>Apa saja fitur yang dimiliki aplikasi ini?</b> Diantaranya yaitu video pembelajaran, artikel, <i>game</i> interaktif dan quiz 
  			   			serta <b>kamus kaganga</b> khusus untuk materi kaganga.
  			   		</Paragraph>
  			   		<div className="mx-4 w-[300px] h-[250px]">
  			   			<div className="smp w-[300px] h-[250px]"></div>
  			   		</div>
  			   		<br/>
  			   		<h1 className="font-poppinsBold text-white text-[30px]"><b>Meet the Team!</b></h1>
  			   		<br/>
  			   		<div className="flex justify-center items-center flex-col gap-2">
				      <BiographyCard
				        name="Nabeel Adriansyah"
				        birthDate="30 Januari 2008"
				        className="SMA NEGERI 1 RL"
				        role="Designer dan Developer"
				      />
				      <BiographyCard
				        name="Rafie Fielbert Wirasena"
				        birthDate="14 Januari 2008"
				        className="SMA NEGERI 1 RL"
				        role="Editor"
				      />
				      <BiographyCard
				        name="Hanna Viola Danutaga"
				        birthDate="7 Januari 2008"
				        className="SMA NEGERI 1 RL"
				        role="Pengisi suara dan Perancang Materi"
				      />
				      <BiographyCard
				        name="Syeren Zaskiamiranda"
				        birthDate="22 Agustus 2008"
				        className="SMA NEGERI 1 RL"
				        role="Pengisi suara dan Perancang Materi"
				      />
				      <BiographyCard
				        name="Zahrah Athirah"
				        birthDate="2008"
				        className="SMA NEGERI 1 RL"
				        role="Ilustrator dan animator"
				      />
				    </div>
				    <Paragraph>
  			   			Software yang kami gunakan adalah <b> Figma untuk desain, VScode untuk program,
  			   			Audacity untuk audio editing dan Adobe Premiere Pro untuk video editing</b>
  			   			Bahasa pemrograman yang digunakan ialah <b>C#, Java, Javascript dan Python</b>
  			   		</Paragraph>
  			   </section>
			</ul>
		</div>
	</>)
}