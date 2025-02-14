import React from 'react'
import './PortfolioStyle.css'

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
            <div className='content-card'>
              <div className='card-img'>
                <img src="https://picsum.photos/350" alt="Sample Image" />
              </div>
              <div className='card-descript'>
                <h4>Project name</h4>
                <a href="">Link</a>
              </div>          
            </div>
            <div className='content-card'>
              <div className='card-img'>
                <img src="https://picsum.photos/350" alt="Sample Image" />
              </div>
              <div className='card-descript'>
                <h4>Project name</h4>
                <a href="">Link</a>
              </div>          
            </div>
            <div className='content-card'>
              <div className='card-img'>
                <img src="https://picsum.photos/350" alt="Sample Image" />
              </div>
              <div className='card-descript'>
                <h4>Project name</h4>
                <a href="">Link</a>
              </div>          
            </div>
            <div className='content-card'>
              <div className='card-img'>
                <img src="https://picsum.photos/350" alt="Sample Image" />
              </div>
              <div className='card-descript'>
                <h4>Project name</h4>
                <a href="">Link</a>
              </div>          
            </div>
          </div>
        </div>
    </section>
  )
}

export default Portfolio