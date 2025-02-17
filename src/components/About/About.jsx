import React from 'react'
import './AboutStyle.css'

function About() {
  return (
    <section id='about'>
        <div className='container'>
          <div className='about-img'>
            <img src="https://picsum.photos/600/400" alt="Sample Image" />
          </div>
          <div className='about-text'>
            <h2>About <strong>Me</strong></h2>
            <p className='about-lead'>
              Sawaddee kub khun por khun mae pee nhong wan nee mhoo huau ja mar tum website keaw gub portfolio khong tua eang.
            </p>
            <p className='about-description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
    </section>
  )
}

export default About