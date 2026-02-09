import React from 'react'
import { Link } from 'react-router-dom'
import './PortfolioStyle.css'

import ShootZBG from '../../assets/ShootZ.png'
import LDKBG from '../../assets/LastDayInKhumueng.png'
import BlackestNight from '../../assets/BlackestNight.png'
import DontPressS from '../../assets/DontPressS.png'
import Redveil from '../../assets/Redveil.png'

function Portfolio() {
  return (
    <section id='portfolio'>
        <div className='container'>
          <div className='title'>
            <h2>
              Featured 
              <strong> Portfolio</strong>
            </h2>
          </div>
          <div className='content'>
            <Link to="/game/shootz" className='content-card'>
              <div className='card-img'>
                <img src={ShootZBG} alt="Sample Image" />
              </div>
              <div className='card-descript'>
                <h4>ShootZ</h4>                
              </div>          
            </Link>
            <Link to="/game/lastdayinkhumueng" className='content-card'>
              <div className='card-img'>
                <img src={LDKBG} alt="Sample Image" />
              </div>
              <div className='card-descript'>
                <h4>Last Day in khumaung</h4>                
              </div>          
            </Link>
            <Link to="/game/blackestnight" className='content-card'>
              <div className='card-img'>
                <img src={BlackestNight} alt="Sample Image" />
              </div>
              <div className='card-descript'>
                <h4>The Blackest Night</h4>                
              </div>          
            </Link>
            <Link to="/game/dontpress" className='content-card'>
              <div className='card-img'>
                <img src={DontPressS} alt="Sample Image" />
              </div>
              <div className='card-descript'>
                <h4>Don’t press S</h4>                
              </div>          
            </Link>
            <Link to="/game/redveil" className='content-card'>
              <div className='card-img'>
                <img src={Redveil} alt="Sample Image" />
              </div>
              <div className='card-descript'>
                <h4>Redveil</h4>                
              </div>          
            </Link>
          </div>
        </div>
    </section>
  )
}

export default Portfolio