import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/about'
import Header from '../components/header'
import Main from '../components/main'
import Projects from '../components/projects'
import Sidebar from '../components/sidebar'
import Skills from '../components/skills'
import ContactMe from '../components/contactme'

const Home: NextPage = () => {
  return (
    <div className='z-0 h-screen overflow-x-hidden overflow-y-scroll bg-secondary snap-y snap-mandatory
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F08080]/80'>
      <Head>
        <title>Yancee</title>
        <link rel="icon" href="./assets/pixelLogo.png" />
      </Head>
      
      <Header/>
      
      <section id='main' className='snap-start'>
        <Main/>
      </section>

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
      <section id='contactme' className='snap-start'>
        <ContactMe/>
      </section>


    </div>
  )
}

export default Home
