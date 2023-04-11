import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function ProjectsCard1({}: Props) {
  return (
    <article className='flex flex-col items-center flex-shrink-0 w-[300px] md:w-[400px] xl:w-[1000px]
    snap-center bg-[#292929] pb-6 px-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden
    '>
      <motion.img
      initial={{
        y:-200,
        opacity:0
      }}
      transition={{duration:1.2}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      className='h-45 w-40 xl:w-[540px] xl:h-[350px] p-8'
      src='https://images-ext-2.discordapp.net/external/ssyiqwtQZ6_pxa5Z0xguDhjEQWe__P4tfx4dCpm7OvI/%3Fformat%3Djpg%26name%3Dlarge/https/pbs.twimg.com/media/Fs9DF1MXgAAM70j?width=1117&height=670'
      alt=''
      />

      <div className='px-0 space-y-4 md:px-10 text-[10px] xl:text-[14px]'>
        <h4 className='tracking-[5px] font-semibold'>ELECTIVE PROJECT</h4>
        <p>Lekto is a Speech Emotion Recognition application that utilizes machine learning to translate non-Tagalog dialects into Tagalog. 
            It also has the added capability of identifying the speaker&apos;s emotions, making communication more effective and efficient.</p>
        <p>Contact me for more information</p>
      </div>
    </article>
  )
}

export default ProjectsCard1