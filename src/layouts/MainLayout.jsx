import React from 'react'
import Nav from '../components/Nav/Nav'
import Home from '../components/Home/Home'
import Portfolio from '../components/Portfolio/Portfolio'
import Resume from '../components/Resume/Resume'
import Contact from '../components/Contact/Contact'
import About from '../components/About/About'

function MainLayout() {
  return (
    <section id='main-layout'>
        <Nav></Nav>
        <Home></Home>
        {/* <About></About> */}
        <Portfolio></Portfolio>
        <Resume></Resume>
        {/* <Contact></Contact> */}
    </section>
  )
}

export default MainLayout