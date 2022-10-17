import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

type Props = {}

export default function Main({ }: Props) {

  const [text, count] = useTypewriter({
    words: ["hello, i'm yancee"],
    delaySpeed: 2000,
    loop: true
  })

  return (
    <div
      className='flex items-center justify-center w-full h-screen'>
      <div className='flex flex-col items-center justify-center md:flex-row'>
        <div className='flex flex-col items-center justify-center max-w-screen-lg mx-auto'>
          <div className='flex flex-col justify-center text-4xl font-bold sm:text-7xl md:flex-row'>
            {/* <h1 className='text-secondary'>hello, i'm</h1>
            <h2 className='flex items-center justify-center md:ml-6 text-primary'>yancee</h2> */}
            <h1>
              <span className='text-secondary'>{text}</span>
              <Cursor cursorColor='#F08080' />
            </h1>
          </div>
          <p className='py-3'>welcome to my portfolio</p>
          <div className='py-3'>
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: .3 },
              }}
              className='px-6 py-1 border-2 border-primary text-primary'>resume</motion.button>
          </div>
          <div>
            <SocialIcon url="https://instagram.com/eecnayy" bgColor='transparent' fgColor='#F08080' target="_blank" />
            <SocialIcon url="https://linkedin.com/in/yancee" bgColor='transparent' fgColor='#F08080' target="_blank" />
            <SocialIcon url="https://github.com/iknay" bgColor='transparent' fgColor='#F08080' target="_blank" />
            <SocialIcon url="https://facebook.com/yanceevillanueva" bgColor='transparent' fgColor='#F08080' target="_blank" />
          </div>
          <div className='absolute w-full h-screen overflow-hidden -z-10'>
            <motion.div initial={{
              opacity: 0,
            }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 3
              }}>
              <motion.img
                src='./assets/emoji _white flower_.png'
                animate={{
                  opacity: 1,
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity, type: "linear", duration: 30,
                }}
              ></motion.img>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}