import React, { useState, useRef} from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import {motion,useCycle} from 'framer-motion'
import {useDimensions} from './use-dimension'
import Sidebar from './sidebar'
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {

  const [nav, setNav] = useState (false);
  const [fade, setFade] = useState(false)
  
    const triggerFade = () => {
        setFade(prevState => {
        return !prevState
        })
    }

    const links = [
        {
            id: '#about',
            link: '// about'
        },
        {
            id: 2,
            link: '// skills'
        },
        {
            id: 3,
            link: '// projects'
        },
        {
          id: 4,
          link: '// contact me'
      },
    ]

  return (
    <header className="">

      <div className="fixed top-0 z-10 flex items-center justify-between w-full h-16 px-6 shadow-lg bg-opacity-70 bg-secondary text-paper">
        <motion.div className="n-left" 
          initial={{x: -500, opacity: 0, scale: 0.6}}
          animate={{x: 0, opacity: 1, scale: 1}}
          transition={{duration: 1.5}}>

        <Link href='#main'>
          <button>
          <img src="./assets/pixelatedLogo.png" alt="myLogo"className="w-16 cursor-pointer"/>
          </button>
        </Link>


        </motion.div>

        

        <motion.div 
          initial={{x: 500, opacity: 0, scale: 0.5}}
          animate={{x: 0, opacity: 1, scale: 1}}
          transition={{duration: 1.5,}}
          className='hidden md:flex'>
            <Link href='#main'>
              <button className='hidden'>main</button>
            </Link>
            <Link href='#about'>
            <button className='headerbtn'>// about</button>
            </Link>
            <Link href='#skills'>
            <button className='headerbtn'>// skills</button>
            </Link>
            <Link href='#projects'>
            <button className='headerbtn'>// projects</button>
            </Link>
            <Link href='#contactme'>
            <button className='headerbtn'>// contact me</button>
            </Link>
            
          {/* <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li key={id} className="flex px-4 font-light cursor-pointer text-paper hover:text-primary hover:duration-500">
                {link}
              </li>))}
          </ul> */}
          
          </motion.div>
       
          <Sidebar/>
          
      </div>
    </header>
  );
}