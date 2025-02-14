import React from 'react'
import './ResumeStyle.module.css'

function Resume() {
  return (
    <section id='resume'>
      <div className='container'>
        <div className='title'>
          <h2>
            My <strong>Resume</strong>
          </h2>
        </div>

        {/*Education section*/}
        <div className='education group'>
          <h2>Education</h2>
          <div className='resume-item'>
            <span className='date'>
              <span className='icen-caldendar'></span>
              Date
            </span>
            <h3>Master in Information Technology</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <span className='school'>Chiang Mai University</span>
          </div>
        </div>

        {/*Exprirence section*/}
        <div className='exprirence group'>

        </div>
      </div>
        
    </section>
  )
}

export default Resume