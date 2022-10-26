import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Main from '../components/main'
import Sidebar from '../components/navigationbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Yancee</title>
        <link rel="icon" href="./assets/pixelLogo.png" />
      </Head>
      <Sidebar/>
      {/* Header */}
      <Header/>
      
      {/* <Main/> */}
      <section>
        <Main/>
      </section>

      {/* <About/> */}

      {/* <Skills/> */}

      {/* <Projects/> */}

      {/* <ContactMe/> */}

    </div>
  )
}

export default Home
