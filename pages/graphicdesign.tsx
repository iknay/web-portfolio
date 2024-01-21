import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoArrowBack, IoArrowUpCircleSharp } from "react-icons/io5";
import {motion, Transition} from "framer-motion";

export default function GraphicDesign () {
    return(
        <div className="min-h-screen overflow-x-hidden pb-6 overflow-y-scroll bg-gradient scroll-smooth scrollbar-thumb-[#F08080]/80 scrollbar-thin scrollbar-track-white-400/20 ">

            <div className="flex">
                <div className="absolute top-10 left-10">
                    <Link href="/" className="flex items-center justify-center duration-300 border-4 rounded-full text-paper md:w-12 md:h-12 w-9 h-9 bg-primary hover:text-primary hover:bg-transparent border-primary">
                    <IoArrowBack size={25}/>
                    </Link>
                </div>

                <div className="flex items-center justify-end w-full mt-8">
                    <h1 className="pr-8 text-3xl">GRAPHIC DESIGN</h1>
                </div>
                
            </div>

            <div className="flex items-center justify-center mx-10 mt-6">
                <Image src="/assets/monday.jpg" alt="Monday" width={560} height={500}/>

                <div className="grid grid-cols-2">
                    <Image src="/assets/thursday.jpg" alt="Thursday" width={280} height={500}/>
                    <Image src="/assets/saturday.jpg" alt="Saturday" width={280} height={500}/>
                    <Image src="/assets/friday.png" alt="Friday" width={280} height={500}/>
                    <Image src="/assets/analyst.jpg" alt="Purchasing Analyst" width={280} height={500}/>
                </div>
            </div>

            <div className="flex items-center justify-center mx-10">
                <Image src="/assets/pubmatyancee.png" alt="Pubmat of Marina Summers" width={560} height={500}/>
                <Image src="/assets/marina.png" alt="Pubmat of Yancee" width={560} height={360}/>
            </div>

            <div className="flex items-center justify-center mx-10">
                <Image src="/assets/streamingheader.png" alt="Pubmat of Yancee" width={1120} height={360}/>
            </div>

            <div className="flex items-center justify-center">
            <motion.button
            animate={{ y: -20 }}
            transition={{ 
            ease: "linear", 
            duration: 1, 
            repeat: Infinity, 
            type: "spring",
            damping: 10,
            repeatType: "reverse"
            } as Transition}
            className='mt-8'><Link href='/graphicdesign'><IoArrowUpCircleSharp className="text-primary" size={60}/></Link></motion.button>
            </div>

        </div>
    );
}