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
    <motion.div className='relative pb-4 flex flex-col items-center justify-center min-h-screen px-10 mx-auto text-center xl:px-10 max-w-[2000px] space-y-16 text-paper'>
        <h3 className='tracking-[10px] md:text-6xl text-2xl font-semibold '> skills </h3>
        <div className='grid gap-4 grid-rows xl:grid-cols-4'>
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