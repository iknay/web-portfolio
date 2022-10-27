import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='relative flex flex-row h-screen px-10 mx-auto text-left md:flex-col md:text-center text-paper justify-evenly'>
      <h3 className='absolute top-24 tracking-[15px] text-2xl'>about</h3>

      <motion.img 
      className='object-scale-down w-56 -mb-20 rounded-full h-76 md:mb:20'
      src="./assets/my_pic.jpg"/>
    </div>
  )
}