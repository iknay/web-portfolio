import React, {Component} from 'react'
import {motion} from 'framer-motion';

interface BlogCardState {
  flipped: boolean;
}

class ProjectsCard1 extends Component<{}, BlogCardState> {
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
        <p className='text-justify'>I handled front-end web development activities
           using react.js and tailwind css and QA activities for
           functions and features of the web application. I mostly
           worked on the admin page of the company and a bit of
           backend using php and mysql.</p>
        <p className='mt-4'>Check out {""}
          <a className='tracking-wide underline hover:text-[#F08080]' href='https://www.ilovetaters.com' target="_blank" rel='noreferrer noopener'>
             ilovetaters.com</a></p>
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
          src="https://media.discordapp.net/attachments/1091002910588018748/1124227344614314065/taters.png?width=1282&height=670"
          alt="taters"
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
          <h1 className='md:text-[24px] text-[16px] font-bold text-accent tracking-wider'>Taters Enterprises Inc.</h1>
          <p className=''>Web Developer Intern</p>
          <p className="text-[12px] mt-8 read-more md:flex hidden">Hover to see more</p>
          <p className="md:hidden read-more">Touch to see more</p>
        </div>
      </div>
    );
  }
}


export default ProjectsCard1;