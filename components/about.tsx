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
      className='flex-shrink-0 object-cover flex items-center justify-center md:mt-10
      h-48 w-48 rounded-full md:rounded-lg md:w-56 md:h-72 xl:w-[400px] xl:h-[500px] xl:mt-20 mt-10'
      src="./assets/my_pic.jpg"/>
      <div className='flex pl-4 pr-4 text-justify'>
        <span><h3>Hi, I'm a front-end developer and UI designer who has a passion for <br></br> creating engaging and intuitive web applications. <br></br>
          With my technical expertise in front-end development languages <br></br>like HTML, CSS, ReactJS, and TypeScript,<br></br> as well as my back-end knowledge of programming <br></br>languages such as Python and Node.js, <br></br>
          I am able to build seamless, responsive, and scalable <br></br> web applications from start to finish.</h3><br></br>
        <h4>email me at yanceevillanueva16@gmail.com</h4>
        </span>
      </div>
    </div>
  )
}