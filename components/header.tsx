import React, { useState, useRef} from 'react'
import {motion,useCycle} from 'framer-motion'
import Sidebar from './sidebar'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

export default function Header({}: Props) {

  return (
    <header>
      <div className="top-0 z-10 flex items-center justify-between md:h-24 bg-opacity-70 text-primary">
        <motion.div className="n-left" 
          initial={{x: -500, opacity: 0, scale: 0.6}}
          animate={{x: 0, opacity: 1, scale: 1}}
          transition={{duration: 1.5}}>

        <Link href='#main'>
          <button>
          <Image src="/assets/logo.png" alt="myLogo" width={28} height={30} className="cursor-pointer "/>
          </button>
        </Link>

        </motion.div>

        <motion.div 
          initial={{x: 500, opacity: 0, scale: 0.5}}
          animate={{x: 0, opacity: 1, scale: 1}}
          transition={{duration: 1.5,}}
          className='pr-4 text-sm lg:pr-0 lg:text-md navLinks'>
            <Link href='#main'>
              <button className='hidden'></button>
            </Link>
            <Link href='#about'>
            <button className='headerbtn hover-underline'> About</button>
            </Link>
            <Link href='#skills'>
            <button className='headerbtn hover-underline'> Skills</button>
            </Link>
            <Link href='#projects'>
            <button className='headerbtn hover-underline'> Works</button>
            </Link>
            <Link href='#contactme'>
            <button className='headerbtn hover-underline'> Contact</button>
            </Link>        
          </motion.div> 
        
      </div>
    </header>
  );
}