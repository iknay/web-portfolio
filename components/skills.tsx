import React from 'react'
import {motion} from 'framer-motion';
import html_icon from '../public/assets/skills/html.png';
import css_icon from '../public/assets/skills/css.png';
import reactjs_icon from '../public/assets/skills/react.png';
import javascript_icon from '../public/assets/skills/javascript.png';
import typescript_icon from '../public/assets/skills/typescript.png';
import nextjs_icon from '../public/assets/skills/nextjs.png';
import tailwind_icon from '../public/assets/skills/tailwind.png';
import git_icon from '../public/assets/skills/git.png';
import figma_icon from '../public/assets/skills/figma.png';
import photoshop_icon from '../public/assets/skills/photoshop.png';
import { StaticImageData } from 'next/image';
import Image from "next/image";

type Props = {
  directionBottom?: boolean;
}

export interface SkillData {
  icon: StaticImageData;
  title: string;
}

const skillsData: SkillData[] = [
  {
    icon: html_icon,
    title: "HTML"
  },
  {
    icon: css_icon,
    title: "CSS"
  },
  {
    icon: reactjs_icon,
    title: "React.js"
  },
  {
    icon: javascript_icon,
    title: "JavaScript"
  },
  {
    icon: typescript_icon,
    title: "TypeScript"
  },
  {
    icon: nextjs_icon,
    title: "Next.js"
  },
  {
    icon: tailwind_icon,
    title: "Tailwind"
  },
  {
    icon: git_icon,
    title: "Git"
  },
  {
    icon: figma_icon,
    title: "Figma"
  },
  {
    icon: photoshop_icon,
    title: "Photoshop"
  },
]

export default function Skills({directionBottom}: Props) {
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
    {/* <motion.div className='flex items-center justify-center pt-16'>
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
    </motion.div> */}
    <motion.div 
    initial={{
      y: directionBottom ? -90 : 90,
      opacity: 0
    }}
    transition={{duration: 0.5}}
    whileInView={{opacity: 1, y: 0}}
    className='w-full mt-10 bg-[#090909] h-fit md:p-16 p-12 md:pb-20 md:pt-20 pt-12 pb-12 rounded-[80px] lg:mb-10'>
      <motion.div 
      initial={{
        y: directionBottom ? -90 : 90,
        opacity: 0
      }}
      transition={{duration: 0.5}}
      whileInView={{opacity: 1, y: 0}}
      className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5'>
        {skillsData.map((skill, index) => (
          <div key={index} className='flex items-center justify-center'>
            <div className='bg-[#212121] lg:w-96 w-56 aspect-square rounded-3xl hover:bg-[#5A5A5A] duration-500'>
              <div className='flex flex-col items-center justify-center w-full h-full space-y-4'>
                <Image src={skill.icon} alt={skill.title} className='w-12 md:w-20 lg:w-24 aspect-square'/>
                <p className='text-sm font-semibold lg:text-lg font-rubik text-paper'>{skill.title}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
    
    
   </motion.div>
  )
}

