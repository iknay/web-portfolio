import React, { useState, useRef} from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import {motion,useCycle} from 'framer-motion'
import {useDimensions} from './use-dimension'
import {Navigation} from './nav'
import {MenuToggle} from './navtoggle'


type Props = {}
const sidebar = {
  open: (height = 900) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};
export default function Header({}: Props) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);


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
    <header className=''>
        <div className='fixed top-0 flex items-center justify-between w-full h-16 px-6 shadow-lg bg-opacity-70 text-secondary bg-paper'>
        <motion.div className='n-left'
        initial={{
            x:-500,
            opacity:0,
            scale:0.6
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}
        transition={{
            duration:1.5
        }}>
        <img
            src='./assets/pixelatedLogo.png'
            alt="myLogo"
            className="w-16"
          ></img>
        </motion.div>
        
        <motion.div
        initial={{
            x:500,
            opacity:0,
            scale:0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}
        transition={{
            duration:1.5
        }}>
        <ul className='hidden md:flex'>

            {links.map(({id, link}) => (
                <li 
                key={id}
                className='px-4 font-light cursor-pointer text-secondary hover:text-primary'>
                {link}
                </li>

            ))}

        </ul>
        
        {/* <div 
        onClick={() => setNav (!nav)} 
        onAnimationStart={triggerFade}
        className={`z-10 pr-4 duration-300 cursor-pointer text-secondary md:hidden
        ${fade ? "fadedClass" : "visibleClass"}`}>

                {nav ? <FaTimes size={20}/> : <FaBars size={20}/>}   

        </div>
        
        {nav && (
            <ul className='absolute right-0 flex flex-col items-center justify-center top-20'>
            {links.map(({id, link}) => (
                    <li 
                    key={id}
                    className='px-4 py-2 text-sm font-light cursor-pointer text-secondary'>
                    {link}
                    </li>

            ))}
        </ul>       
        )}    */}
<motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={`z-10 pr-4 md:hidden `}
    >
      <motion.div  variants={sidebar}/>
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
    </motion.div>  
        
    </div>
    </header>
    
  )
}