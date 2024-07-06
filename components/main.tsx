import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import Pointer from './followpointer'
import Header from './header'

type Props = {}

export default function Main({ }: Props) {

  return (
    <div className='w-full h-screen'>
      <Header/> 
        <div className='lg:flex h-[90%] grid items-end'>
        <h1 className=' xl:text-[238px] lg:text-[220px] md:text-5xl text-3xl leading-none text-secondary font-rubik font-medium'>Front End Developer</h1>
        <div>
          {/* <p>specializing in front-end development</p> */}
          <a href='https://drive.google.com/file/d/16xgIEU1lybUNrBSlf4zOnozazk9VY9e8/view?usp=sharing' target = "_blank" rel='noreferrer noopener'>
          <button className='button px-10 py-1 border-2 rounded-full border-primary text-[40px] text-primary mt-4 mb-10'>resume</button></a>
        </div>
      </div>
     
      <Pointer/>
    </div>
  )
}

{/* <div className='flex flex-col items-center justify-center w-full md:flex-row'> */}
        // <div className='flex flex-col items-center justify-center w-full max-w-screen-lg mx-auto'>
          {/* <div className='flex flex-col justify-center text-3xl font-bold text-center md:text-[72px] md:flex-row'>
            <h1 className='text-primary'>
      
            </h1>
          </div> */}
          {/* <div className='py-3'>
          <a href='https://drive.google.com/file/d/1v8DqnxB-GC6WhlcLZ1qWnpEDF5gQLfYu/view?usp=sharing' 
              target = "_blank" rel='noreferrer noopener'>
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: .3 },
              }}
              className='px-6 py-1 border-2 rounded-full border-primary text-[40px] text-primary'>resume</motion.button></a>
          </div> */}
          {/* <div>
            <SocialIcon url="https://instagram.com/eecnayy" bgColor='transparent' fgColor='#EFEEEE' target="_blank" rel='noreferrer noopener'/>
            <SocialIcon url="https://linkedin.com/in/yancee" bgColor='transparent' fgColor='#EFEEEE' target="_blank" rel='noreferrer noopener'/>
            <SocialIcon url="https://github.com/iknay" bgColor='transparent' fgColor='#EFEEEE' target="_blank" rel='noreferrer noopener'/>
            <SocialIcon url="https://facebook.com/yanceevillanueva" bgColor='transparent' fgColor='#EFEEEE' target="_blank" rel='noreferrer noopener'/>
          </div> */}
          
      //   </div>
      // </div>