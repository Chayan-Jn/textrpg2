import { Link } from 'react-router-dom';


const items = [
    { name: 'Healing potion', cost: 10, src: '../images/shop/hppot.gif' },
    { name: 'Gx3789', cost: 200, src: '../images/shop/gxpot.gif' },
    { name: 'Strength Potion', cost: 25, src: '../images/shop/strpot.gif' },
    { name: 'Liquid Electriciy', cost: 50, src: '../images/shop/elecpot.gif' }
];

import Nav from '../Assets/Nav';
import '../styles/shop.css'
const S9Shop = () => {
  return (

    <div className="shop">
        <Nav/>
        <div className="shop-name">
            Shop
        </div>
        <div className="shop-board">
            <img src={'../images/shop.png'}/>
        </div>
        <div className="shop-items">
            {
                items.map((item)=>(
                    <div className='shop-item'>

                    <img src={item.src} className='item-img'>
                   </img>
                   <div className='item-data'>
                    <span className='item-name'>{item.name}</span>
                    <span className='item-price'>Cost  {item.cost}</span>
                    <span className='buy'>Buy</span>
                    </div>                   
                   </div>
                ))
            }
        </div>
        <Link to={"Final"}><button>Proceed</button></Link>
    </div>
  )
}

export default S9Shop