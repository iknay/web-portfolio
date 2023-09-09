import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Sticky = () => {
  return (
    <div className='absolute right-12 top-64'>
        <div className='fixed bg-primary h-[200px] w-[55px]'>
            <SocialIcon url="https://instagram.com/eecnayy" bgColor='transparent' fgColor='#EFEEEE' target="_blank" rel='noreferrer noopener'/>
            <SocialIcon url="https://linkedin.com/in/yancee" bgColor='transparent' fgColor='#EFEEEE' target="_blank" rel='noreferrer noopener'/>
            <SocialIcon url="https://github.com/iknay" bgColor='transparent' fgColor='#EFEEEE' target="_blank" rel='noreferrer noopener'/>
            <SocialIcon url="https://facebook.com/yanceevillanueva" bgColor='transparent' fgColor='#EFEEEE' target="_blank" rel='noreferrer noopener'/>
        </div>
    </div>
  )
}

export default Sticky;