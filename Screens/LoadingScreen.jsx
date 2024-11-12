import '../styles/LoadingScreen.css'
import { GiBroadsword } from "react-icons/gi";
import { Link } from 'react-router-dom';

const LoadingScreen = () => {
  return (


    <div className='main'>
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