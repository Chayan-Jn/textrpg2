import Nav from "../Assets/Nav"
import '../styles/BattleScreen.css'
import { getData } from "../Contexts/PlayerHealth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Player Image
const playerImage = '../images/player/fox1.gif'
const playerAttackImage = '../images/player/atk.gif'

export const BattleScreen = ({images,info,edmg,	eHP,mEHP,next,dieTime}) => {

	const [enemyHP,setEnemyHP] = useState(eHP);
	const [maxEnemyHP,setMaxEnemyHP] = useState(mEHP)
	const { playerHP,setPlayerHP,setMaxPlayerHP,playerDMG,setPlayerDMG} = getData()
	const {enemyImage,enemyDeathImage} = images;
	const{message,Name} = info
	const[attacking,setAttacking] = useState(false)
	const[clear,setClear] = useState(false)

	 
	
	function attack(){
		if(attacking) return;
		setAttacking(true)
		setTimeout(()=>{
			setAttacking(false);
			let dmg = Math.floor(Math.random()
			*playerDMG);
			setEnemyHP(hp=>hp-dmg)
			let edps = Math.floor(Math.random()*edmg)
			setPlayerHP(hp=>hp-edps)
			setLog(`You dealt ${dmg} dmg || enemy dealt ${edps}dmg`)

		},400)	

	}

	//Helps remove attack button by goind to next cycle as react batches playerhp and enemyhp . 
		useEffect(() => {
			if (playerHP <= 0 || enemyHP <= 0) {
				setLog(playerHP <= 0 ? 'You died' : 'Enemy died');
				setFightend(true);
				setTimeout(()=>setClear(true),dieTime*1000)
				
			}
		}, [playerHP, enemyHP]);


	const [log,setLog] = useState('');
	const[fightend,setFightend] = useState(false);



  return (
    <>
      <Nav/>
      <div className="battle-page">

			<div className="battle-screen">
				<div className="top">
					{log==''?message:log}
				</div>
				<div className="fight">
					<div className="player">

						{!attacking&& <img src={playerImage} className="image"/>}
						{attacking &&
						<img src={playerAttackImage}className="image"></img>}
					</div>
					<div className="enemy">
						<div className="enemy-nav">
							<p className="name">{Name}</p>
							<p className="enemy-hp">HP {enemyHP}/{maxEnemyHP}</p>
						</div>	
						{!fightend &&
						<img src={enemyImage} className="enemy-image"/>}

						{fightend && !clear &&<img src={enemyDeathImage} className="enemy-image"/>}
					</div>
				</div>
			</div>

			{fightend==false?(
				attacking==true?			
					<div className="Actions">
							<div className="atk-btn" onClick={attack} style={{opacity:0.5}}>
								Attack
							</div>
					</div>:			
					<div className="Actions">
							<div className="atk-btn" onClick={attack} >
								Attack
							</div>
					</div>
			)
				:<Link to={next}><button>Proceed</button></Link> 
			}
      </div>
    </>
  )
}