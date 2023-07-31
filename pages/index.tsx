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

    <div className='z-0 h-screen overflow-x-hidden overflow-y-scroll bg-gradient-primary
    scrollbar scrollbar-track-white-400/20 scrollbar-thumb-[#F08080]/80 scroll-smooth'>
      <Head>
        <title>Yancee</title>
        <link rel="icon" href='./assets/pixelLogo2.png' />
      </Head>
      
      <Header/>
      
      <section id='main'>
        <Main/>
      </section>

      <section id='about'>
      <About/>
      </section>

      {/* <Skills/> */}
      <section id='skills'>
        <Skills/>
      </section>

      {/* <Projects/> */}
      <section id='projects'>
        <Projects/>
      </section>

      {/* <ContactMe/> */}
      <section id='contactme'>
        <ContactMe/>
      </section>


    </div>
  )
}

export default Home
