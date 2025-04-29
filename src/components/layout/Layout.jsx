import React from 'react'
import Start from '../ui/start/Start'
import Navbar from '../navbar/Navbar'
import Home from '../../pages/Home'
import Router from '../../router/Router'
import Footer from '../footer/Footer'

const Layout = () => {
  return (
    <div>
      <nav>
        <Start/>
        <Navbar/>
      </nav>
      <main>
        <Router/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout
