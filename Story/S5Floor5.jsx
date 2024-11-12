import { BattleScreen } from "../Screens/BattleScreen"

//{images,info,edmg,	eHP,mEHP,next}
const info = {Name:"Ae21",
  message:"As you step onto Floor 5, a strange ripple distorts the air before you. Suddenly, a figure materializes before you—its form both ethereal and solid, with countless magical arms swirling around it. Each arm moves with a life of its own, glowing with vibrant energy. The being's piercing gaze locks onto yours, and a voice echoes in your mind 'I am the guardian of this floor'"
}
const images = {
  enemyImage:"../images/enemies/aegis.gif",
  enemyDeathImage:"../images/enemies/aegisdeath.gif"
}

const edmg = 5
const eHP=11
const mEHP=110
const dieTime = 10
const next="/Floor4"


const S5Floor5 = () => {
  return (
    <div>
      <BattleScreen   
              images={images}
              info={info}
              edmg={edmg}
              eHP={eHP}
              mEHP={mEHP}
              next={next}
              dieTime={dieTime}
             
      />
    </div>
  )
}

export default S5Floor5