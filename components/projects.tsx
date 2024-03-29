import React, {Component} from 'react'
import Link from 'next/link';
import {motion} from 'framer-motion';
import {BsFillArrowUpRightCircleFill} from 'react-icons/bs';

export default function Projects () {

  return(
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='relative flex flex-col max-w-full min-h-screen mb-0 overflow-hidden text-left text-primary lg:mb-4'>
      <h1 className='mb-8 text-lg font-normal lg:text-2xl'>My Work</h1>

      <div className='space-y-6'>

        <div className='flex justify-between pb-16 border-b-2 border-solid imageHover1 border-primary'>
          <div className='w-3/4'>
            <h2 className='text-xl font-semibold lg:text-3xl'>Gamer Points Application</h2>
            <p className='font-light'>I created responsive and intuitive front-end solutions for a gaming platform using React.js, TypeScript, JavaScript, and Tailwind CSS. 
            Collaborated with UI/UX designers to implement design mockups seamlessly. Integrated innovative features like a notification system 
            with an advertisement counter, a referral program with invite codes, and a filter system to boost user engagement. </p>
          </div>
          <div className='flex items-end justify-center mr-5'>
              <Link href='/gamerpoints'>
                <BsFillArrowUpRightCircleFill size={60} />
              </Link>
          </div>
        </div>
        
        <div className='flex justify-between pb-16 border-b-2 border-solid imageHover1 border-primary'>
          <div className='w-3/4'>
            <h2 className='text-xl font-semibold lg:text-3xl'>Taters Enterprises Inc.</h2>
            <p className='font-light'>I handled front-end web development activities using react.js and tailwind css and QA activities
              for functions and features of the web application. I mostly worked on the admin page of the company
              and a bit of backend using php and mysql.</p>
          </div>
          <div className='flex items-end justify-center mr-5'>
            <a href='https://www.ilovetaters.com' target="_blank" rel='noreferrer noopener'><BsFillArrowUpRightCircleFill size={60}/></a>
          </div>
        </div>

        <div className='flex justify-between pb-16 border-b-2 border-solid imageHover2 border-primary'>
          <div className='w-3/4 '>
            <h2 className='text-xl font-semibold lg:text-3xl'>Lekto</h2>
            <p className='font-light'>Lekto is a Speech Recognition mobile application that utilizes machine learning to translate
             non-Tagalog dialects into Tagalog using React Native and Python + flask.</p>
          </div>
          <div className='flex items-end justify-center mr-5'>
          <a href='https://drive.google.com/file/d/1rfyfQRXHwyLD7Z0ip-JWtPcatbOK6qFR/view?usp=sharing' target="_blank" rel='noreferrer noopener'><BsFillArrowUpRightCircleFill size={60}/></a>
          </div>
        </div>

        <div className='flex justify-between pb-16 border-b-2 border-solid imageHover2 border-primary'>
          <div className='w-3/4 '>
            <h2 className='text-xl font-semibold lg:text-3xl'>Trace It</h2>
            <p className='font-light'>Enhanced contact tracing app with a user-friendly interface and mobile capabilities. 
            Scan QR codes offline, store locations, and seamlessly sync with the database upon internet reconnection. This innovative solution 
            contributes to a safer pandemic response by eliminating the use of physical forms and reducing potential virus transmission risks.</p>
          </div>
          <div className='flex items-end justify-center mr-5'>
          <a href='https://drive.google.com/file/d/1uburE-NzI82M2nMaDcpQqhSeGM6aiGmw/view?usp=sharing' target="_blank" rel='noreferrer noopener'><BsFillArrowUpRightCircleFill size={60}/></a>
          </div>
        </div>

        <div className='flex justify-between pb-16 border-b-2 border-solid imageHover3 border-primary'>
          <div className='w-3/4 '>
            <h2 className='text-xl font-semibold lg:text-3xl'>Firststep Multispecialty Clinic</h2>
            <p className='font-light'>The website of FirstStep Multispecialty Clinic provides an attractive and easy-to-use
             online platform. I have designed the website with a modern look, responsive layouts, and user-friendly navigation. 
             The goal was to create an engaging website that reflects the professionalism of the clinic and allows users to easily access their services.</p>
          </div>
          <div className='flex items-end justify-center mr-5'>
          <a href='https://firststepmultispecialtyclinic.vercel.app/' target="_blank" rel='noreferrer noopener'><BsFillArrowUpRightCircleFill size={60}/></a>
          </div>
        </div>

        <div className='flex justify-between pb-16 border-b-2 border-solid imageHover4 border-primary'>
          <div className='w-3/4 '>
            <h2 className='text-xl font-semibold lg:text-3xl'>Love Calculator</h2>
            <p className='font-light'>The Love Calculator Website adds a playful twist to relationships, allowing users
             to input names and receive a whimsical love compatibility score to share and enjoy.</p>
          </div>
          <div className='flex items-end justify-center mr-5'>
          <a href='https://iknay.github.io/LoveCalculator/' target="_blank" rel='noreferrer noopener'><BsFillArrowUpRightCircleFill size={60}/></a>
          </div>
        </div>

        <div className='flex justify-between pb-16 border-b-2 border-solid imageHover4 border-primary'>
          <div className='w-3/4 '>
            <h2 className='text-xl font-semibold lg:text-3xl'>Graphic Design</h2>
            <p className='font-light'>Discover my graphic design journey through a collection of diverse projects 
            showcasing my expertise in creating visually compelling designs across various mediums and styles.</p>
          </div>
          <div className='flex items-end justify-center mr-5'>
              <Link href='/graphicdesign'>
                <BsFillArrowUpRightCircleFill size={60} />
              </Link>
          </div>
        </div>
        
      </div>
          
    </motion.div>
  );
}

