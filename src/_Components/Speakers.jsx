import React, {useRef} from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import {useInView} from "framer-motion"
import Speaker1 from '../assets/speakers/Speaker1.webp'

function SpeakerCard(props) {
	return (
		<div className="relative mx-auto lg:mx-0 w-fit" 
        onMouseEnter={()=>document.querySelector(`#speaker-${props.speakerNumber}-socials`).classList.remove('hidden')} 
        onMouseLeave={()=>document.querySelector(`#speaker-${props.speakerNumber}-socials`).classList.add('hidden')}
        >
			<div className="aspect-square border-2 bg-gradient-to-b from-[#939192] to-[#6a254a] px-2 pt-2">
				<img
					className=""
					src={props.picture}
					alt={props.name}
				/>
			</div>
			<div className="bg-[#d9d9d9] flex px-3 py-2 justify-between items-center">
				<p className="font-[poppins] font-semibold">{props.name}</p>
				<p className="font-[inter] text-[0.72rem]">{props.designation}</p>
			</div>
            <div className="hidden transition" id={`speaker-${props.speakerNumber}-socials`}>
			<div className="rounded-tl-lg py-1 pr-2 pl-3 -right-1.5 -bottom-4 flex gap-x-2 absolute bg-[#ababab]">
				<a href={props.instagram} target="_blank">
					<FaInstagram color="#E1306C" size={18} />
				</a>
				<a href={props.linkedin} target="_blank">
					<FaLinkedin color="#0a66c2" size={18} />
				</a>
			</div>
			<svg height="26" width="26" className="absolute right-14 -bottom-[19px]">
				<polygon points="26,0 5,23 26,23" fill="#ababab" />
			</svg>
			<svg height="6" width="6" className="absolute -right-[6px] bottom-[10px]">
				<polygon points="0,3 0,6 6,6" fill="#636363" />
			</svg>
            </div>
		</div>
	);
}

function Speakers() {
    const ref=useRef(null);
    const isInView = useInView(ref,{once:true});
	return (
		<>
			<section id='speakers' className="bg-[#171717] overflow-x-hidden">
				<h1 className="text-center font-inter text-white text-5xl font-medium mb-16 px-12 md:px-20 pt-20 underline decoration-0.75" ref={ref}
                style={{
                    transform: isInView || window.innerWidth<700? "none":"translateX(-200px)",
                    transition: "all 1s",
                }}
                >
					SPEAKERS
				</h1>
				{/* <span className="block h-1 bg-white underline position:absolute bottom-0 "></span> */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 px-10 md:px-16 lg:px-20 w-full gap-y-20 gap-x-20" ref={ref}
                style={{
                    transform: isInView || window.innerWidth<700? "none":"translateX(500px)",
                    transition: "all 1.3s"
                }}>
					<SpeakerCard 
                    name="SK SHAHNAWAZ" 
                    designation="ASDE, SLB"
                    picture={Speaker1}
                    instagram="https://www.instagram.com/sks29/"
                    linkedin="https://www.linkedin.com/in/skshahnawaz/"
                    speakerNumber="1" />				
				</div>
			</section>
		</>
	);
}

export default Speakers;
