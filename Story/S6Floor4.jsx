
import { useState,useRef } from 'react'
import '../styles/Floor4.css'
import { Link } from 'react-router-dom'
const S6Floor4 = () => {

  const[scrolled,setScrolled] = useState(false)
  const floorRef = useRef(null); 
  const handlescroll = () =>{
    const scrollLeft = floorRef.current.scrollLeft;
    const scrollWidth = floorRef.current.scrollWidth;
    const clientWidth = floorRef.current.clientWidth;
    setScrolled(true)

    if (scrollLeft + clientWidth >= scrollWidth - 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }
  return (

    <div className='f4'>
    <div className="floor4" onScroll={handlescroll} ref={floorRef}>
      <div className="wrapper">
        <div className="one portion">
          <img src='layers/2.png' className='image'/>
        </div>
        <div className="two portion ">
          <img src='layers/3.png' className='image'/>
        </div>
        <div className="three portion">
          <img src='layers/4.png' className='image'/>
        </div>
        <div className="four portion">
          <img src='layers/5.png' className='image'/>
        </div>
        <div className="five portion">
          <img src='layers/6.png' className='image'/>
        </div>
        <div className="six portion">
          <img src='layers/7.png' className='image'/>
        </div>
        <div className="seven portion">
          <img src='layers/8.png' className='image'/>
        </div>
      </div>
    </div>

      <div className="lore4">
        The purple-lit forest on the fourth floor feels unnervingly alive, its eerie glow casting shifting shadows among the trees. The air hums with a soft, disembodied whisper, and the ground shifts beneath your feet as though the forest is watching, waiting. There's a strange sense of being both drawn in and observed, the atmosphere thick with an unspoken presence.
        hint:"scroll to move through the forest"

        {scrolled && 
        <Link className='showProceed' to={"/Floor3"}>
          <div >
            <span>Proceed</span>
          </div>
        </Link>}
      </div>

    </div>


  )



}

export default S6Floor4