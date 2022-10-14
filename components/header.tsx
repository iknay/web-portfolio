import React, { useState } from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'


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
            id: 1,
            link: 'about me'
        },
        {
            id: 2,
            link: 'skills'
        },
        {
            id: 3,
            link: 'projects'
        },
        {
            id: 4,
            link: 'contact me'
        },
    ]
  return (
    <header>
        <div className='flex items-center justify-between w-full h-20 px-6 shadow-lg text-secondary bg-paper'>
        <div className='n-left'>
        <img
            src='./assets/logo.png'
            alt="myLogo"
            className="w-16"
          ></img>
        </div>
        
        <ul className='hidden md:flex'>

            {links.map(({id, link}) => (
                <li 
                key={id}
                className='px-4 font-light cursor-pointer text-secondary'>
                {link}
                </li>

            ))}

        </ul>
        <div 
        onClick={() => setNav (!nav)} 
        onAnimationStart={triggerFade}
        className={`z-10 pr-4 duration-300 cursor-pointer text-secondary md:hidden
        ${fade ? "fadedClass" : "visibleClass"}`}>

                {nav ? <FaTimes size={20}/> : <FaBars size={20}/>}   

        </div>
        
        {nav && (
            <ul className='relative top-0 left-0 flex flex-col items-center justify-center'>
            {links.map(({id, link}) => (
                    <li 
                    key={id}
                    className='px-4 py-2 text-sm font-light cursor-pointer text-secondary'>
                    {link}
                    </li>

            ))}
        </ul>       
        )}     
        
    </div>
    </header>
    
  )
}