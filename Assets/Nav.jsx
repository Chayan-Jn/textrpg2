import '../styles/Nav.css'
import { GiWrappingStar } from "react-icons/gi";
import { useState,useContext } from 'react';
import { FiCodepen, FiCodesandbox } from "react-icons/fi";
import { GiShardSword } from "react-icons/gi";
import { getData} from '../Contexts/PlayerHealth';

const Inventory = ({open,setOpen,setEnemyHP,setPlayerDMG,setPlayerHP,invitems,setInvItems,maxPlayerHP}) =>{
	return(
		<div className='inventory'>
			<div className='inven-nav'>
				<p onClick={()=>setOpen(false)} className='close'>Close</p>
			</div>
			<div className='items'>
				{invitems.map((item)=>(
					<div className="item" key={item.id} onClick={()=>handleuse(item,setEnemyHP,setPlayerDMG,setPlayerHP,setInvItems,maxPlayerHP)}>
						<img src={item.src} className='slot-item-img' 	/>
					</div>
				))}

			</div>
		</div>	
	)
}

const handleuse = (item,setEnemyHP,setPlayerDMG,setPlayerHP,setInvItems,maxPlayerHP)=>{

	const newItem = { ...item };
	// const {
	// 	playerHP,
	// 	setPlayerHP,
	// 	maxPlayerHP,
	// 	setMaxPlayerHP,
	// 	playerDMG,
	// 	setPlayerDMG,
	// 	invitems,
	// 	setInvItems
	// } = getData()


	switch(item.src) {
	  case '../images/shop/hppot.gif':
		setPlayerHP(hp=>Math.min(hp+20,maxPlayerHP))
		break;
	  case '../images/shop/elecpot.gif':
		setEnemyHP(hp=>hp-25)
		break;
	  case '../images/shop/gxpot.gif':
		break;
	  case '../images/shop/strpot.gif':
		setPlayerDMG(dmg=>dmg+2)
		break;
	  default:
		break;
	}
	setInvItems((prev)=>(
		prev.map((invitem)=>(
			invitem.id === item.id?{...newItem,src:'',empty:true}:invitem //Replacing the item that was used
		))
	))



}


const Nav = ({setEnemyHP}) => {

	const {
		playerHP,
		setPlayerHP,
		maxPlayerHP,
		setMaxPlayerHP,
		playerDMG,
		setPlayerDMG,
		invitems,
		setInvItems
	} = getData()

  const [inventoryOpen, setInventoryOpen] = useState(false)
  return (
	<>
		{inventoryOpen && <Inventory 
		setEnemyHP={setEnemyHP}
		setPlayerDMG = {setPlayerDMG}
		setPlayerHP = {setPlayerHP}
		setInvItems = {setInvItems}
		invitems = {invitems}
		maxPlayerHP = {maxPlayerHP}
		open={inventoryOpen} setOpen={setInventoryOpen}/>}
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