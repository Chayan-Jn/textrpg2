
import { useEffect, useState } from 'react'
import StoryScreen from '../Screens/StoryScreen'
import '../styles/Floor2.css'

const text = "As you walk by the moonlit lake, you spot a strange figure standing alone by the shore. Dressed oddly, they eye you with a knowing gaze. 'Care to buy some stuff?' they ask, their voice carrying a hint of mystery."
const next = "/Shop"

const S8Floor2 = () => {
  return (

 
    <div className="lake">
      <img src="../images/lake.png" alt="lake" className="bg" />
      <div className='lore2'>
        <StoryScreen text={text} next={next}/>
      </div>
    </div>

  )
}

export default S8Floor2