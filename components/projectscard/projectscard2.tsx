import React, {Component} from 'react'
import {motion} from 'framer-motion';

interface BlogCardState {
  flipped: boolean;
}

class ProjectsCard2 extends Component<{}, BlogCardState> {
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
        <p className='text-justify'>Lekto is a Speech Recognition application that utilizes machine learning to translate non-Tagalog dialects into Tagalog using React Native and Python + flask.</p>
        <p className='text-[16px] text-primary mt-4'>Contact me if you want to know more about the project</p>
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
          src="https://media.discordapp.net/attachments/1091002910588018748/1124227344341671936/lekto.png?width=1282&height=670"
          alt="taters"
        />
      </div>
    );
  }
}

class MainArea extends Component {
  render() {
    return (
      <div className="main-area text-tertiary">
        <div className="blog-post">
          <h1 className='text-[24px] font-bold'>Lekto</h1>
          <p className=''>Elective Project</p>
          <p className="text-[12px] mt-10 read-more">Hover to see more</p>
        </div>
      </div>
    );
  }
}


export default ProjectsCard2;