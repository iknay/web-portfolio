import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='md:flex h-[90%] pt-20 text-primary'>

      <div className='flex-col items-start justify-start -mt-16 space-y-6 md:mt-0'>
        <p className='leading-tight text-md lg:text-xl'>I&apos;m passionate for creating engaging and intuitive web applications.
           I create responsive and scalable web experiences, ensuring seamless user interactions from concept to completion.</p>
        <Link href="#contactme">
          <button id='#contactme' className='flex px-8 py-1 text-lg border-2 rounded-full button border-primary lg:text-xl text-primary'>Say Hello
          <Image src="/assets/hi.png" alt="hand wave" width={50} height={50}/>
          </button>
        </Link>
       
      </div>

      <div className=''>
        <Image src="/assets/myPic.png" alt="hand wave" width={1150} height={1500} />
      </div>

    </div>
  )
}

{/* <motion.img 
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
      h-48 w-48 rounded-full md:rounded-lg md:w-56 md:h-72 xl:w-[400px] xl:h-[500px] xl:mt-20 mt-0'
      src="./assets/me.jpg"/> */}