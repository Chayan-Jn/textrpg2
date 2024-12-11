import { useState } from "react"
import { BattleScreen } from "../Screens/BattleScreen"

const about= "You step cautiously onto floor 10, the first true challenge of your ascent. The air is heavy with a strange energy. As your eyes adjust to the dim light, you feel something shift in the darkness.  From the shadows, creature comes into view. Its eyes gleaming with hunger. You realize this is no ordinary guardian—this creature is the first trial on your path upwards. "

const dmg = 3
const dieTime = 2
const S3Floor7 = () => {
  const[enemyHP,setEnemyHP] = useState(15)
  const [maxEnemyHP,setMaxEnemyHP] = useState(15)
  return (
    <div>
        <BattleScreen
                images={
                    { 
                    enemyImage: 'images/enemies/DemonSlime.gif',
                    enemyDeathImage:'images/enemies/DemonSlimeDie.gif' }
                  }
                  info={{ 
                    message: about,
                    Name: "Slime Demon"
                  }}
                  edmg={dmg}
                  eHP={enemyHP}
                  mEHP={maxEnemyHP}
                  next={"/Floor6"}
                  dieTime={dieTime}

        />
    </div>
  )
}

export default S3Floor7

//credit https://chierit.itch.io/ slimeboss
// https://darkpixel-kronovi.itch.io/ golem
// https://gabry-corti.itch.io/fox-hero fox
// https://mushahroomali.itch.io/pixel-art-stone-floorwall wall