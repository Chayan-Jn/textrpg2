import { Link } from 'react-router-dom';
import { addtoinv } from '../Assets/Nav';
import { getData } from '../Contexts/PlayerHealth';
import Nav from '../Assets/Nav';
import '../styles/shop.css'
const items = [
    { name: 'Healing potion', cost: 10, src: '/images/shop/hppot.gif' },
    { name: 'Gx3789', cost: 200, src: '/images/shop/gxpot.gif' },
    { name: 'Strength Potion', cost: 25, src: '/images/shop/strpot.gif' },
    { name: 'Liquid Electriciy', cost: 50, src: '/images/shop/elecpot.gif' }
];


const S9Shop = () => {
    const {gold,setGold,invitems,setInvItems} = getData()
  return (

    <div className="shop">
        <Nav/>
        <div className="shop-name">
            Shopey Shop
        </div>
        <div className="shop-board">
            <img src={'/images/shop.png'}/>
        </div>
        <div className="shop-items">
            {
                items.map((item,index)=>(
                    <div className='shop-item' id={item.id}>
                    <img src={item.src} className='item-img'>
                   </img>
                   <div className='item-data'>
                    <span className='item-name'>{item.name}</span>
                    <span className='item-price'>Cost  {item.cost}</span>
                    <span className='buy' onClick={()=>{
                        if(gold>=item.cost){
                            setGold(g=>g-item.cost)
                            addtoinv(item,setInvItems,invitems);
                        }
                        else{
                            alert('Not enough gold')
                        }

                    }}>Buy</span>
                    </div>                   
                   </div>
                ))
            }
        </div>
        <Link to={"/Final"}><button>Proceed</button></Link>
    </div>
  )
}

export default S9Shop