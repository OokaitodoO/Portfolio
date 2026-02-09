import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './GameDetailStyle.css'

import ShootZBG from '../../assets/ShootZ.png'
import LDKBG from '../../assets/LastDayInKhumueng.png'
import BlackestNight from '../../assets/BlackestNight.png'
import DontPressS from '../../assets/DontPressS.png'
import Redveil from '../../assets/Redveil.png'

const gameData = {
  shootz: {
    title: 'ShootZ',
    image: ShootZBG,
    description: 'เกม Shoot Z เป็นเกมเล็กๆ (Top-down shooting game) ที่พัฒนาขึ้นมาจาก Construct 3 ซึ่งพัฒนาโดยผมคนเดียวเป็นเกมยืนยิงซอมบี้ โดยผู้เล่นจะต้องพยายามทำคะแนนให้ได้มากที่สุด โดยที่หากโดนซอมบี้เข้าถึงตัว พลังชีวิตจะลดลงทีละ 1 และผู้เล่นจะมีสกิลที่จะใช้คะแนนที่มีอยู่ 50 คะแนนเพื่อเติมพลังชีวิตให้เต็มทันที',
    externalLink: 'https://www.construct.net/en/free-online-games/kanjanawat-muangam-43955/play'
  },
  lastdayinkhumueng: {
    title: 'Last Day in Khumueng',
    image: LDKBG,
    description: 'เกม Last Day in Khumaung เป็นเกมที่พัฒนาจากทีของผม Power Puff Guy ซึ่งผมรับผิดชอบตำแหน่ง Programmer โดยทำในส่วนของ Game loop และตัวบอสในเกมซึ่งเป็นเกมแนว Action, Adventure ในเมืองเชียงใหม่ที่ล่มสลายจากปีศาจ และปีศาจสิงสู่รูปปั้นสำคัญต่างๆ ในระแวกคูเมืองเชียงใหม่ โดยพัฒนาขึ้นจาก MonoGame Framework (C#)',
    externalLink: 'https://gitlab.com/OokaitodoO/lastdayinkhumueng'
  },
  blackestnight: {
    title: 'The Blackest Night',
    image: BlackestNight,
    description: 'เกม The Blackest Night เป็นเกมแรกที่พัฒนาด้วย Unity engine ด้วยภาษา C# ซึ่งเป็นเกมที่ทำเพื่อเล่นบนแพลตฟอร์ม Android โดยรับหน้าที่เป็น Game programmer และทำระบบทุกอย่างภายในเกมเพราะในโปรเจคนี้มี Programmer แค่คนเดียว โดยจะเป็นเกมเอาชีวิตรอด (Action survival game) ให้นานที่สุดในป่าพิศวงนี้ โดยที่จะแบ่งเป็น 2 ช่วงคือ ช่วงกลางวันที่เราสามารถเดินหากระท่อมในป่าได้ เพื่อซื้ออาวุธ และไอเทมต่างๆ และเมื่ออาทิตย์ลับขอบไฟฟ้า สัตว์ประหลาดที่อยู่ในป่าก็จะเริ่มออกล่าในยามค่ำคืน',
    externalLink: 'https://gitlab.com/OokaitodoO/theblackestnight'
  },
  dontpress: {
    title: "Don't press S",
    image: DontPressS,
    description: 'เกม Don’t Press S เป็นเกมที่จัดทำขึ้นมาในรายการ Global Game Jam Ching Mai 2024 ซึ่งผมรับผิดชอบหน้าที่ในการทำ Game loop และ Mechanics มินิเกมต่างๆ และเป็นนักแสดงในเกมด้วย ซึ่งธีมในปีนั้นคือ “Make Me Laugh” ซึ่งกลุ่มของพวกผมเลยตัดสินใจทำเกมเล่าเรื่องโดยที่ดำเนินเกมด้วยคลิปวิดีโอที่จัดทำกัน และเหตุการณ์ที่เกิดขึ้นในเกมจะมีมินิเกมให้เล่นเช่น Quick time event และระบบเลือกตัวเลือกที่ทำให้ผลลัพธ์ออกมาต่างกัน เป็นต้น ซึ่งในปีนั้นได้รางวัลรองชนะเลิศอันดับที่ 1 (First runner up)',
    externalLink: 'https://gitlab.com/ggj242/DontPressS'
  },
  redveil: {
    title: 'Redveil',
    image: Redveil,
    description: 'เกม Redveil เป็นเกมแนว Soul-like ผสมเข้ากับ Rogue-like ในมุมมองแบบ Third-person ที่เราจะได้รับบทผู้กล้าที่จะพิชิตหอคอยที่ตัวร้ายได้สร้างขึ้นมา โดยผู้เล่นจะมีอาวุธที่ออกแบบมาเป็นพิเศษที่สามารถสลับใช้ไปมาได้ทั้งดาบ ขวาน แล้วก็ปืน และเมื่อเราผ่านไปแต่ชั้นได้ก็จะได้รับพลังพิเศษเพิ่ม',
    externalLink: 'https://gitlab.com/jetkae/jetkae'
  }
}

function GameDetail() {
  const { gameId } = useParams()
  const game = gameData[gameId]

  if (!game) {
    return (
      <section id='game-detail'>
        <div className='container'>
          <h2>Game not found</h2>
          <Link to="/" className='back-link'>Back to Portfolio</Link>
        </div>
      </section>
    )
  }

  return (
    <section id='game-detail'>
      <div className='container'>
        <Link to="/#portfolio" className='back-link'>← Back to Portfolio</Link>
        <div className='detail-content'>
          <div className='detail-image'>
            <img src={game.image} alt={game.title} />
          </div>
          <div className='detail-info'>
            <h1>{game.title}</h1>
            <p>{game.description}</p>
            <a href={game.externalLink} target='_blank' rel='noopener noreferrer' className='external-link'>
              View Github
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameDetail
