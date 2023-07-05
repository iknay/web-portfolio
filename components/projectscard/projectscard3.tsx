import React, {Component} from 'react'
import {motion} from 'framer-motion';

interface BlogCardState {
  flipped: boolean;
}

class ProjectsCard3 extends Component<{}, BlogCardState> {
  constructor(props: {}) {
    super(props);
    this.state = { flipped: false };
    this.flip = this.flip.bind(this);
  }

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  };

  render() {
    return (
      <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}>
      <div
        onMouseEnter={this.flip}
        onMouseLeave={this.flip}
        className={'card-container' + (this.state.flipped ? ' flipped' : '')}
      >
        <Front />
        <Back />
      </div>
    </motion.div>
    );
  }
}

//Project1

class Front extends Component {
  render() {
    return (
      <div className="front">
        <ImageArea />
        <MainArea />
      </div>
    );
  }
}

class Back extends Component {
  render() {
    return (
      <div className="back">
        <p className='text-justify'>The website of FirstStep Multispecialty Clinic provides an attractive and easy-to-use online platform.
         I have designed the website with a modern look, responsive layouts, and user-friendly navigation. 
         The goal was to create an engaging website that reflects the professionalism of the clinic and allows users
          to easily access their services.</p>
        <p className='mt-4'>Live demo {""}
          <a className='tracking-wide underline hover:text-[#F08080]' href='https://firststepmultispecialtyclinic.vercel.app/' target="_blank" rel='noreferrer noopener'>
             firststepmultispecialtyclinic</a></p>
      </div>
    );
  }
}

class ImageArea extends Component {
  render() {
    return (
      <div className="image-container">
        <img
          className="card-image"
          src="https://media.discordapp.net/attachments/1091002910588018748/1124225567571595425/clinic.png?width=1282&height=650"
          alt="clinic"
        />
      </div>
    );
  }
}

class MainArea extends Component {
  render() {
    return (
      <div className="main-area text-secondary">
        <div className="blog-post">
          <h1 className='md:text-[24px] text-[16px] font-bold tracking-wider text-accent'>Firststep Multispecialty Clinic</h1>
          <p className="text-[12px] mt-8 read-more md:flex hidden">Hover to see more</p>
          <p className="md:hidden read-more">Touch to see more</p>
        </div>
      </div>
    );
  }
}


export default ProjectsCard3;