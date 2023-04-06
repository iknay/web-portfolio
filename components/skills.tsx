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
    <motion.div className='relative flex flex-col items-center justify-center min-h-screen px-10 mx-auto text-center xl:px-10 max-w-[2000px] xl:flex-row text-paper'>
        <h3 className='absolute top-24 tracking-[15px] text-2xl'> skills </h3>
        <div className='grid grid-cols-3 gap-5 xl:grid-cols-4'>
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
  )
}