import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='relative flex flex-col items-center h-screen px-10 mx-auto text-center justify-evenly md:flex-row text-paper'>
      <h3 className='absolute top-24 tracking-[15px] text-2xl'>about</h3>

      <motion.img 
      initial={{
        x: -200,
        opacity: 0,
      }}
      transition={{
        duration: 1.2
      }}
      whileInView={{
        opacity:1,
        x:0
      }}
      viewport={{ once: true }}
      className='flex-shrink-0 object-cover flex items-center justify-center md:mt-0
      h-48 w-48 rounded-full md:rounded-lg md:w-56 md:h-72 xl:w-[400px] xl:h-[500px] xl:mt-20 mt-0'
      src="./assets/my_pic.jpg"/>
      <div className='flex items-center justify-center'>
        <h4>hello</h4>
      </div>
    </div>
  )
}