import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/about'
import Header from '../components/header'
import Main from '../components/main'
import Projects from '../components/projects'
import Sidebar from '../components/sidebar'
import Skills from '../components/skills'

const Home: NextPage = () => {
  return (
    <div className='z-0 h-screen overflow-scroll bg-secondary snap-y snap-mandatory'>
      <Head>
        <title>Yancee</title>
        <link rel="icon" href="./assets/pixelLogo.png" />
      </Head>
      
      {/* Header */}
      <Header/>
      
      {/* <Main/> */}
      <section id='main' className='snap-start'>
        <Main/>
      </section>

      {/* <About/> */}
      <section id='about' className='snap-center'>
      <About/>
      </section>

      {/* <Skills/> */}
      <section id='skills' className='snap-start'>
        <Skills/>
      </section>

      {/* <Projects/> */}
      <section id='projects' className='snap-start'>
        <Projects/>
      </section>

      {/* <ContactMe/> */}

    </div>
  )
}

export default Home
