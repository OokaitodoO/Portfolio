import React from 'react'
import './ResumeStyle.css'

function Resume() {
  return (
    <section id='resume'>
      <div className='container'>
        <div className='title'>
          <h2>
            My <strong>Resume</strong>
          </h2>
        </div>

        <div className='group'>
          {/*Education section*/}
          <div className='education'>
            <h2>Education</h2>
            <div className='resume-item'>
              <span className='date'>
                <span className='icon-caldendar'></span>
                2022 - Present
             </span>
              <h3>CAMT, Chiang Mai University, Thailand</h3>
              <p>ศึกษาอยู่ที่วิทยาลัยศิลปะ สื่อ และเทคโนโลยี สาขาดิจิทัลเกม ชั้นปีที่ 4 มหาวิทยาลัยเชียงใหม่ ซึ่งสนใจและศึกษาเกี่ยวกับการพัฒนาเกมด้วย Unity และการเขียนโปรแกมด้วยภาษา C#</p>
              <span className='school'>Chiang Mai University</span>
            </div>            
          </div>

          {/*Exprirence section*/}
          <div className='exprirence'>
            <h2>Exprirence</h2>
            <div className='resume-item'>
              <span className='date'>
                <span className='icon-caldendar'></span>
                2024 - Present
              </span>
              <h3>Varisoft Internship</h3>
              <p>ประสบการณ์การฝึกงานที่บริษัท Varisoft ได้เรียนรู้เกี่ยวกับพัฒนาเกมมือถือแพลตฟอร์ม Android ด้วย Unity และ C# ซึ่งได้เรียนรู้และความเข้าใจเกี่ยวกับการ Programming มากขึ้นไม่ว่าจะเป็นการทำ Object pooling, State machine, การทำเกม Multiplayer ด้วย MagicOnion และได้เรียนรู้กระบวนการทำงานกับทีมและพี่ๆ ในบริษัท</p>
              <span className='school'>Varisoft</span>
            </div>            
          </div>

        </div>
        
      </div>
        
    </section>
  )
}

export default Resume