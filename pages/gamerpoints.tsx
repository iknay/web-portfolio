import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoArrowBack } from "react-icons/io5";
import {motion} from "framer-motion";

export default function GamerPoints () {
    return(
        <div className="min-h-screen bg-gradient-neutral overflow-x-hidden overflow-y-scroll scroll-smooth scrollbar-thumb-[#F08080]/80 scrollbar-thin scrollbar-track-white-400/20">

            <div className="flex">
                <div className="absolute top-10 left-10">
                    <Link href="/" className="flex items-center justify-center duration-300 border-4 rounded-full md:w-12 md:h-12 w-9 h-9 text-primary bg-paper hover:text-paper hover:bg-transparent border-paper">
                    <IoArrowBack size={25}/>
                    </Link>
                </div>
                
                <div className="flex items-center justify-center w-full mt-8">
                    <Image src="/assets/gp_logo.png" alt="gamerpoints" className="md:w-[300px] h-auto w-40" width={300} height={300}/>
                </div> 
            </div>

            <div className="items-center justify-center w-full h-full sm:p-8">
                <video controls width="550" className="mx-auto border-4 rounded-md border-paper ">
                    <source src="/assets/gp_trailer.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <motion.div
                className="flex justify-start pt-8 pb-11"
                animate={{ x: '-300%' }}
                transition={{ ease: 'linear', duration: 40, loop: Infinity }}
                >
                <motion.img
                    src="/assets/gp_login.png"
                    alt="gamerpoints"
                    width={1150}
                    height={1150}
                    className="mr-4" 
                />
                <motion.img
                    src="/assets/gp_homescreen.png"
                    alt="gamerpoints"
                    width={1150}
                    height={1150}
                    className="mr-4" 
                />
                <motion.img
                    src="/assets/gp_allgames.png"
                    alt="gamerpoints"
                    width={1150}
                    height={1150}
                    className="mr-4" 
                />
                <motion.img
                    src="/assets/gp_slideshow.png"
                    alt="gamerpoints"
                    width={1150}
                    height={1150}
                    className="mr-4" 
                />
                <motion.img
                    src="/assets/gp_invite.png"
                    alt="gamerpoints"
                    width={1150}
                    height={1150}
                />
                </motion.div>

        </div>
    )
}