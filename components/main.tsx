import React from 'react'

type Props = {}

export default function Main({}: Props) {
  return (
    <div
    className='w-full max-h-screen'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col items-center justify-center h-full max-w-screen-lg mx-auto'>
          <div className='flex flex-col justify-center text-5xl font-bold sm:text-7xl md:flex-row'>
            <h1 className='text-secondary'>hello, i'm</h1>
            <h2 className='flex items-center justify-center md:ml-6 text-primary'>yancee</h2>
          </div>
          <p className='py-4'>welcome to my portfolio</p>
          <div className='py-4'>
            <button className='px-6 py-1 border-2 border-primary text-primary'>resume</button>
          </div>
        </div>

      </div>
    </div>
  )
}