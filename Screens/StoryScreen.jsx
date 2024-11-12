import '../styles/StoryScreen.css'
import { Link } from 'react-router-dom'

const StoryScreen = ({text,next,Extra}) => {
  return (
    <div className="Main">
        <div className="info">
            {text}
        </div>
        <div className='Extra'>
          {Extra}
        </div>
        <Link to={next}>
            <button>Proceed</button>
        </Link>
    </div>
  )
}

export default StoryScreen 