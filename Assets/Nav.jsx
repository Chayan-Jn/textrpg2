import '../styles/Nav.css'
import { GiWrappingStar } from "react-icons/gi";
import { useState,useContext } from 'react';
import { FiCodepen, FiCodesandbox } from "react-icons/fi";
import { GiShardSword } from "react-icons/gi";
import { getData} from '../Contexts/PlayerHealth';

const Inventory = ({open,setOpen}) =>{
	return(
		<div className='inventory'>
			<div className='inven-nav'>
				<p onClick={()=>setOpen(false)} className='close'>Close</p>
			</div>
			<div className='items'>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>
				<div className="item"></div>

			</div>
		</div>	
	)
}


const Nav = () => {

  let {playerHP,maxPlayerHP,playerDMG} = getData()
  const [inventoryOpen, setInventoryOpen] = useState(false)
  return (
	<>
		{inventoryOpen && <Inventory open={inventoryOpen} setOpen={setInventoryOpen}/>}
		<div className="navbar">
			<div className='inven-logo' onClick={()=>setInventoryOpen(prev=>!prev)}>    
				<div>
				<FiCodesandbox />
				</div>   
				<p className='nav-icon-p'>Inventory</p>

			</div>
			<div className="nav-icon hp"
				style={{background:`linear-gradient(to top,#DC143C, #8B0000 ${playerHP}%,white 0%)`}}>
				<div>
				<GiWrappingStar />
				</div>
				<p className='nav-icon-p '>HP {playerHP}/{maxPlayerHP}</p>
			</div>
			<div className="nav-icon atk" ><div>
				<GiShardSword />
				</div>
				<p className='nav-icon-p '>Dmg 0-{playerDMG}</p>
			</div>
		</div>
	</>
  )
}

export default Nav