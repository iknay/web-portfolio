import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoArrowBack, IoArrowUpCircleSharp } from "react-icons/io5";
import {motion, Transition} from "framer-motion";

export default function GraphicDesign () {
    return(
        <div className="min-h-screen overflow-x-hidden pb-6 overflow-y-scroll bg-paper scroll-smooth scrollbar-thumb-[#F25477]/80 scrollbar-thin scrollbar-track-white-400/20 ">

            <div className="flex">
                <div className="flex items-center justify-start w-full mt-8 ml-5">
                    <Link href="/" className="flex items-center justify-center duration-300 border-4 rounded-full text-paper md:w-12 md:h-12 w-9 h-9 bg-primary hover:text-primary hover:bg-transparent border-primary">
                    <IoArrowBack size={25}/>
                    </Link>
                </div>

                <div className="flex items-end justify-end w-full mt-8">
                    <h1 className="pr-8 text-sm lg:text-3xl md:text-xl ">GRAPHIC DESIGN</h1>
                </div>
                
            </div>

            <div className="flex flex-col items-center justify-center w-full">
                <div className="grid items-center justify-center grid-cols-2 mx-10 mt-6">
                <Image src="/assets/monday.jpg" alt="Monday" width={500} height={500}/>
                <Image src="/assets/thursday.jpg" alt="Thursday" width={500} height={500}/>
                <Image src="/assets/saturday.jpg" alt="Saturday" width={500} height={500}/>
                <Image src="/assets/friday.png" alt="Friday" width={500} height={500}/>
                <Image src="/assets/analyst.jpg" alt="Purchasing Analyst" width={500} height={500}/>
                <Image src="/assets/pubmatyancee.png" alt="Pubmat of Marina Summers" width={500} height={500}/>
                <Image src="/assets/marina.png" alt="Pubmat of Yancee" width={500} height={500}/>
                <Image src="/assets/camera.jpg" alt="4K Colorvu" width={500} height={500}/>
                </div>

                <div className="flex items-center justify-center mt-4">
                    <Image src="/assets/streamingheader.png" alt="Pubmat of Yancee" width={1120} height={360}/>
                </div>
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