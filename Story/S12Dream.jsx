import React from 'react'
import StoryScreen from '../Screens/StoryScreen'
import { useNavigate } from 'react-router-dom'
import '../styles/dream.css'


const text = "I suddenly woke up, heart racing, the images of the dungeon still vivid in my mind. It felt so real—the dark corridors, the monsters, the places I visited, and the battles I fought. I could almost feel the weight of the sword in my hand and the rush of adrenaline with each encounter. Was it just a dream? Or was it something more?"


const S12Dream = () => {
  const navigate = useNavigate();
    function handlesleep(){
      navigate("/")
      window.location.reload();

    }
  return (
    <div className='dream'>
       <div>
            {text}
        </div>
        <span onClick={handlesleep} className='sleep'>Sleep</span>

    </div>
  )
}

export default S12Dream