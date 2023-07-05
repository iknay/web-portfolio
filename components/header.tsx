import React, { useState, useRef} from 'react'
import {motion,useCycle} from 'framer-motion'
import Sidebar from './sidebar'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

export default function Header({}: Props) {

  return (
    <header>
      <div className="fixed top-0 z-10 flex items-center justify-between w-full h-16 px-6 shadow-lg bg-opacity-70 text-paper">
        <motion.div className="n-left" 
          initial={{x: -500, opacity: 0, scale: 0.6}}
          animate={{x: 0, opacity: 1, scale: 1}}
          transition={{duration: 1.5}}>

        <Link href='#main'>
          <button>
          <Image src="/assets/pixelatedLogo.png" alt="myLogo" width={64} height={50} className="cursor-pointer "/>
          </button>
        </Link>

        </motion.div>

        <motion.div 
          initial={{x: 500, opacity: 0, scale: 0.5}}
          animate={{x: 0, opacity: 1, scale: 1}}
          transition={{duration: 1.5,}}
          className='hidden md:flex'>
            <Link href='#main'>
              <button className='hidden'></button>
            </Link>
            <Link href='#about'>
            <button className='headerbtn'> about</button>
            </Link>
            <Link href='#skills'>
            <button className='headerbtn'> skills</button>
            </Link>
            <Link href='#projects'>
            <button className='headerbtn'> projects</button>
            </Link>
            <Link href='#contactme'>
            <button className='headerbtn'> contact me</button>
            </Link>        
          </motion.div> 
          <Sidebar/>
        
      </div>
    </header>
  );
}