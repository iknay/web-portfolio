import React from "react";
import Link from "next/link";
import Image from "next/image";
import Carousel from "../components/carousel";
import { IoArrowBack } from "react-icons/io5";

export default function GamerPoints () {
    return(
        <div className="min-h-screen overflow-x-hidden overflow-y-scroll scroll-smooth scrollbar-thumb-[#F08080]/80 scrollbar-thin scrollbar-track-white-400/20"
        style={{
            backgroundImage: 'url("/assets/bg.png")',
            backgroundSize: 'cover',
          }}>

            <div className="flex">
                <div className="absolute top-10 left-10">
                    <Link href="/" className="flex items-center justify-center w-10 h-10 duration-300 rounded-full text-primary bg-paper hover:text-paper hover:bg-primary">
                    <IoArrowBack size={25}/>
                    </Link>
                </div>
                
                <div className="flex items-center justify-center w-full mt-8">
                    <Image src="/assets/gp_logo.png" alt="gamerpoints" width={300} height={300}/>
                </div> 
            </div>

            <div className="items-center justify-center w-full h-full my-8">
                <video controls autoPlay width="550" className="mx-auto border-4 rounded-md border-paper ">
                    <source src="/assets/gp_trailer.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="overflow-hidden pb-14 pt-14">
                <Carousel/>
            </div>

        </div>
    )
}