import React from 'react'
import {motion} from 'framer-motion';
import HtmlSkill from './skills/htmlskill';
import CssSkill from './skills/css';
import Typescript from './skills/typescript';
import ReactJs from './skills/reactjs';
import NextJs from './skills/nextjs';
import MaterialUI from './skills/materialui';
import VSCode from './skills/vscode';
import Figma from './skills/figma';

type Props = {}

export default function Skills({}: Props) {
  return (
   <motion.div className='min-h-screen pt-20 mb-32 lg:mb-0'>
    <h1 className='text-md lg:text-2xl'>The things I can do for you...</h1>
    <div className='lg:space-x-16 lg:flex'>
      <div className='p-4 border-l-2 border-solid border-primary w-96'>
        <p className='text-2xl text-gray-400 mb-9'>01</p>
        <h1 className='text-lg font-medium'>User Experience</h1>
        <p>Crafting web designs to captivate your audience and optimize user interactions.</p>
      </div>
      <div className='p-4 border-l-2 border-solid border-primary w-96'>
        <p className='text-2xl text-gray-400 mb-9'>02</p>
        <h1 className='text-lg font-medium'>Integrated Solutions</h1>
        <p>Combining design and development to encapsulate your brand identity and deliver comprehensive functionality.</p>
      </div>
      <div className='p-4 border-l-2 border-solid border-primary w-96'>
        <p className='text-2xl text-gray-400 mb-9'>03</p>
        <h1 className='text-lg font-medium'>Responsive Design</h1>
        <p>Creating web interfaces that adapt seamlessly to various devices and screen sizes.</p>
      </div>
    </div>
    <motion.div className='flex items-center justify-center pt-16'>
        <div className='grid items-center justify-center grid-cols-2 gap-10 space-y-3 lg:flex'>
            <HtmlSkill/>
            <CssSkill/>
            <Typescript/>
            <ReactJs/>
            <NextJs/>
            <MaterialUI/>
            <VSCode/>
            <Figma/>
        </div>
    </motion.div>
   </motion.div>
  )
}

