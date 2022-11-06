import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/about'
import Header from '../components/header'
import Main from '../components/main'
import Sidebar from '../components/sidebar'

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

      {/* <Projects/> */}

      {/* <ContactMe/> */}

    </div>
  )
}

export default Home
