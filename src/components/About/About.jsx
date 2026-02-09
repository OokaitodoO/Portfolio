import React from 'react'
import './AboutStyle.css'

const AboutData = {
  name: 'Kanjanawat Muangkam',
  nickname: 'Mixer',
  description: 'Hello, Im Kanjanawat Muangkam, also known as Mixer. I am junior game programmer (Unity game developer) from Chiang Mai, Thailand.)'
}


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
              {AboutData.description}              
            </p>            
          </div>
        </div>
    </section>
  )
}

export default About