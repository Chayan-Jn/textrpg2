import { useEffect, useRef } from 'react';
import '../styles/LoadingScreen.css'
import { GiBroadsword } from "react-icons/gi";
import { Link } from 'react-router-dom';

const LoadingScreen = () => {

  const audioRef = useRef(null)
  useEffect(()=>{
    if(audioRef.current){
      audioRef.current.play()
    }
  },[])
  
  return (
    <div className='main'>
      <audio ref={audioRef}  type="audio/mp3" src="mp3/loadmusic.mp3" />
        <Link to="/Beginning" className='link'>
            <button className='btn'>          
                <GiBroadsword className='sword'/>
            </button>
        </Link>
        <p className='show'>Click to Play</p>
    </div>


  )
}

export default LoadingScreen