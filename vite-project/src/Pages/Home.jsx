import React from 'react'
import Nav from '../Components/Nav'
import FindUs from '../Components/FindUs'
import Sponsor from '../Components/Sponsor'
import Contact from '../Components/Contact'

import Footer from '../Components/Footer'
import Main from '../Components/Main'


const Home = () => {
  return (
    <div className='bg-gradient-to-tr from-orange-50 to-cyan-100 via-white  overflow-hidden'>
        <Nav/>
        <Main/>
        <Sponsor/>
        <FindUs/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home