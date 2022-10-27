import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='relative flex flex-col h-screen px-10 text-center md:text-left md:flex-row text-paper justify-evenly'>
      <h3 className='absolute top-24 tracking-[15px] text-2xl'>about</h3>
    </div>
  )
}