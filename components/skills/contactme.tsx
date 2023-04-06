import React from 'react'
import {motion} from 'framer-motion';
import ContactForm from './contactform';

function ContactMe() {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='relative flex flex-col items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly text-paper '>
      <h3 className='absolute top-24 tracking-[15px] text-2xl'>get in touch</h3>

    </motion.div>
  )
}

export default ContactMe