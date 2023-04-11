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
      className='flex-shrink-0 object-cover flex items-center justify-center md:mt-16
      h-48 w-48 rounded-full md:rounded-lg md:w-56 md:h-72 xl:w-[400px] xl:h-[500px] xl:mt-20 mt-20'
      src="./assets/my_pic.jpg"/>
      <div className='flex text-justify md:text-[10px] xl:text-[16px] xl:p-28 text-sm -mt-6 leading-loose'>
        <span><h3>Hi, I&apos;m a front-end developer and UI designer who has a passion for creating engaging and intuitive web applications.
          With my technical expertise in front-end development languages like HTML, CSS, ReactJS, and TypeScript, as well as my back-end knowledge of programming languages such as Python and Node.js,
          I am able to build seamless, responsive, and scalable web applications from start to finish.</h3>
        </span>
      </div>
    </div>
  )
}