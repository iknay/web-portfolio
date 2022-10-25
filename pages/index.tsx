import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/about'
import Header from '../components/header'
import Main from '../components/main'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Yancee</title>
        <link rel="icon" href="./assets/pixelLogo.png" />
      </Head>
      
      {/* Header */}
      <Header/>
      
      {/* <Main/> */}
      <section>
        <Main/>
      </section>

      {/* <About/> */}
      <section>
        <About/>
      </section>

      {/* <Skills/> */}

      {/* <Projects/> */}

      {/* <ContactMe/> */}

    </div>
  )
}

export default Home
