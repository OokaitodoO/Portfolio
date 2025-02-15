import React from 'react'
import './NavStyle.css'

function Nav() {
  const scrollToSection = (id) => {
    console.log(`Scroll to section : ${id}` );
    document.getElementById(id).scrollIntoView({behavior: "smooth"});
  };

  return (
    <section id='nav'>
        <ul className='nav-container'>
            <li className='nav-action'><button onClick={() => scrollToSection("home")}>Home</button></li>
            <li className='nav-action'><button onClick={() => scrollToSection("portfolio")}>Portfolio</button></li>
            <li className='nav-action'><button onClick={() => scrollToSection("resume")}>Resume</button></li>
            <li className='nav-action'><button onClick={() => scrollToSection("about")}>About</button></li>
            <li className='nav-action'><button onClick={() => scrollToSection("contact")}>Contact</button></li>
        </ul>
    </section>
  )
}

export default Nav