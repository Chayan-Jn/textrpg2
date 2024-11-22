import Nav from "../Assets/Nav"
import '../styles/BattleScreen.css'
import { getData } from "../Contexts/PlayerHealth";
import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";

//Player Image
const playerImage = '../images/player/fox1.gif'
const playerAttackImage = '../images/player/atk.gif'

/*
{enemyImage,enemyDeathImage} = images
{message,Name} = info
edmg
eHp
mEHP
next
dieTime
*/
export const BattleScreen = ({images,info,edmg,	eHP,mEHP,next,dieTime}) => {

	const [enemyHP,setEnemyHP] = useState(eHP);
	const [maxEnemyHP,setMaxEnemyHP] = useState(mEHP)
	const { playerHP,setPlayerHP,setMaxPlayerHP,playerDMG,setPlayerDMG} = getData()
	const {enemyImage,enemyDeathImage} = images;
	const{message,Name} = info
	const[attacking,setAttacking] = useState(false)
	const[clear,setClear] = useState(false)
	const[playerDead,setPlayerDead] = useState(false) // to reset if player dies

	const{setGold}  = getData()

	 
	
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
				if(playerHP<=0) setPlayerDead(true)
				else{
					const droppedGold = Math.random()*10+1;
					setGold(g=>g+Math.floor(droppedGold))


				}
				
			}
		}, [playerHP, enemyHP]);

	
		// navigate to /beginning after death
		const navigate = useNavigate(); 
		useEffect(()=>{
			setTimeout(()=>{
				if(playerHP<=0){
					navigate("/beginning")
					window.location.reload()
				}
			},3000)

		},[playerHP])


	const [log,setLog] = useState('');
	const[fightend,setFightend] = useState(false);



  return (
	<>

    {!playerDead&&<>
		<Nav setEnemyHP={setEnemyHP}/>
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
		</> }
	{playerDead && <h1>You Died. Going Back to Sleep</h1>}
	</>
  )
}
