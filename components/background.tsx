import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

export default function Background({}: Props) {
  return (
    <motion.div
              initial={{
              opacity: 0,
            }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 3
              }}>
              <motion.img
                src='./assets/flower-bg.png'
                className='mt-5'
                animate={{
                  opacity: 1,
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity, type: "linear", duration: 150,
                }}
              ></motion.img>
              {/* <motion.img
                src='./assets/emoji _white flower_.png'
                className=''
                animate={{
                  opacity: 1,
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity, type: "linear", duration: 40,
                }}
              ></motion.img>
              <motion.img
                src='./assets/emoji _white flower_.png'
                className='ml-44'
                width="100px"
                animate={{
                  opacity: 1,
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity, type: "linear", duration: 40,
                }}
              ></motion.img> */}
            </motion.div>
  )
}