import React from 'react'
import {motion} from 'framer-motion';

type Props = {}

function ExperienceCard1({}: Props) {
  return (
    <article className='flex flex-col items-center space-y-7 w-[500px] md:w-[600px] xl:w-[900px]'>
        <motion.img
        initial={{
            y: -200,
            opacity:0
        }}
        transition={{duration:1.2}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className='w-32 h-32 xl:w-[300px] xl:h-[300px] object-cover object-center'
        src='https://media.discordapp.net/attachments/1091002910588018748/1091006181797011546/laptop_view.png?width=670&height=670'
        alt=''
        />
        <div>
            <h4>TATERS ENTERPRISES INC.</h4>
            <p>Software Developer Intern</p>
        </div>
    </article>
  )
}

export default ExperienceCard1