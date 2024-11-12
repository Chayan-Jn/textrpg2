import { useEffect, useState } from "react"
import Nav from "../Assets/Nav"
import '../styles/Blessings.css'
import { Link } from "react-router-dom";

import { GiInterleavedClaws } from "react-icons/gi";
import { GiElectricWhip } from "react-icons/gi";
import { GiCursedStar } from "react-icons/gi";

import { getData } from "../Contexts/PlayerHealth";


const S1Blessings = () => {
    const [blessing,setBlessing] = useState('')
    const [result,setResult] = useState('Choose a Blessing')
    const {setMaxPlayerHP,setPlayerDMG,setPlayerHP} = getData()

    useEffect(()=>{
        if(result==='Choose a Blessing'){
            switch(blessing){
                case 'curse':
                    setResult('+10 HP');
                    setMaxPlayerHP(hp=>hp+10);
                    setPlayerHP(hp=>hp+10)
                    break;
                case 'electric':
                    setResult('+2 DMG');
                    setPlayerDMG((dmg) => dmg + 2);
                    break;
                case 'claws':
                    setResult('+5 HP , +1 DMG');
                    setMaxPlayerHP((hp) => hp + 5);
                    setPlayerHP((hp) => hp + 5);
                    setPlayerDMG((dmg) => dmg + 1);        
                    break;
            }
        }
    },[blessing])
    
  return (
    <div className="blessing-container">
        <Nav/>
        <h1>{result}</h1>
        <div className="blessings">
            <div className="bless curse" onClick={()=>setBlessing('curse')}>
                <GiCursedStar />
            </div>
            <div className="bless electric" onClick={()=>setBlessing('electric')}>
                <GiElectricWhip />
            </div>
            <div className="bless claws" onClick={()=>setBlessing('claws')}>
                <GiInterleavedClaws />
            </div>
        </div>

        {result!=='Choose a Blessing' &&        
            <Link to="/Floor7">
                <button>Proceed</button>
            </Link> 
        }  

    </div>
  )
}

export default S1Blessings