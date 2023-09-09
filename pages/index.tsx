import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/about'
import Main from '../components/main'
import Projects from '../components/projects'
import Skills from '../components/skills'
import ContactMe from '../components/contactme'
import Sticky from '../components/sticky'
import Footer from '../components/footer'


const Home: NextPage = () => {

  return (

    <div className='overflow-x-hidden overflow-y-scroll bg-gradient scroll-smooth scrollbar-thumb-[#F08080]/80 scrollbar-thin scrollbar-track-white-400/20'>
        <div className='h-screen margin '>
          <Head>
            <title>Yancee</title>
            <link rel="icon" href='./assets/logo.png' />
          </Head>

          <Sticky/>
          
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

          <Footer/>
      </div>
    </div>
   
  )
}

export default Home


// scrollbar scrollbar-track-white-400/20 scrollbar-thumb-[#F08080]/80