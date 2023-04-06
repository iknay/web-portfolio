import React, { FormEvent } from 'react'
import {motion} from 'framer-motion';
import emailjs, {EmailJSResponseStatus} from 'emailjs-com';
import ContactForm from './contactform';

function ContactMe() {

  function sendEmail(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_7amu1v8', e.currentTarget ,'ikAAtWytT81Fh1Ivm')
    .then((result: EmailJSResponseStatus) => {
    console.log(result.text);
    }, (error) => {
    console.log(error.text);
    })
  }

  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='relative flex flex-col items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly text-paper '>
      <h3 className='absolute top-24 tracking-[15px] text-2xl'>get in touch</h3>
      <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input className='cursor-pointer' type="submit" value="Send" />
      </form>
    </motion.div>
  )
}

export default ContactMe