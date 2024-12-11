import '../styles/Nav.css'
import { GiWrappingStar } from "react-icons/gi";
import { useState,useContext } from 'react';
import { FiCodepen, FiCodesandbox } from "react-icons/fi";
import { MdOutlineGridGoldenratio } from "react-icons/md";
import { GiShardSword } from "react-icons/gi";
import { getData} from '../Contexts/PlayerHealth';

const Inventory = ({open,setOpen,setEnemyHP,setPlayerDMG,setPlayerHP,invitems,setInvItems,maxPlayerHP}) =>{
	return(
		<div className='inventory'>
			<div className='inven-nav'>
				<p onClick={()=>setOpen(false)} className='close'>Close</p>
			</div>
			<div className='items'>
				{invitems.map((item,index)=>(
					<div className="item" key={item.id+`${index}`} onClick={()=>handleuse(item,setEnemyHP,setPlayerDMG,setPlayerHP,setInvItems,maxPlayerHP)}>
						<img src={item.src} className='slot-item-img' 	/>
					</div>
				))}

			</div>
		</div>	
	)
}

const handleuse = (item,setEnemyHP,setPlayerDMG,setPlayerHP,setInvItems,maxPlayerHP)=>{

	const newItem = { ...item };

	switch(item.src) {
	  case '/images/shop/hppot.gif':
		setPlayerHP(hp=>Math.min(hp+20,maxPlayerHP))
		break;
	  case '/images/shop/elecpot.gif':
		if(!setEnemyHP){
			alert('no enemy present, wasted')
			break;
		}
		setEnemyHP(hp=>hp-25)
		break;
	  case '/images/shop/gxpot.gif':
		break;
	  case '/images/shop/strpot.gif':
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


const Nav = ({setEnemyHP,item}) => {


	const {
		playerHP,
		setPlayerHP,
		maxPlayerHP,
		setMaxPlayerHP,
		playerDMG,
		setPlayerDMG,
		invitems,
		setInvItems,
		gold,
		setGold
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
			<div className="nav-icon atk" >
				<div>
				<GiShardSword />
				</div>
				<p className='nav-icon-p '>Dmg 0-{playerDMG}</p>
			</div>
			<div className="nav-icon gold">
				<div className='gold-icon'>
					<MdOutlineGridGoldenratio />
				</div>
				<p className='nav-icon-p'>GOLD {gold}</p>
			</div>
		</div>
	</>
  )
}

export default Nav


export function addtoinv(item,setInvItems,invitems){
	
	const firstemptyslot = invitems.find(item=>item.empty)
	console.log('Adding item to inventory:', item)
	  
	  if(!firstemptyslot){
		alert("Inventory is full ")
		return;
	  }
	  setInvItems((prev)=>(
		prev.map((invitem)=>(
		  invitem.id===firstemptyslot.id?{
			...invitem,src:item.src,empty:false}:invitem
		  
		))
	  ))

}

