import { BattleScreen } from "../Screens/BattleScreen"


// {enemyImage,enemyDeathImage} = images
// {message,Name} = info
// edmg
// eHp
// mEHP
const next = "/Floor2"
const dieTime = 3
const eHP = 10
const mEHP = 10
const edmg = 10
const info = {
        Name: "Crow+",
        message:"As you stepped out from the eerie, purple-lit forest, its unnatural glow fading behind you, the silence was almost suffocating. The trees no longer whispered, and the distant hum of unseen creatures was gone. In the stillness, a shape emerged from the mist ahead—black as night, with feathers that shimmered like an oil slick. The Plague Crow."
      }
const images = {
  enemyImage:"../images/enemies/Pcrow.gif",
  enemyDeathImage:"../images/enemies/Pcrowdie.gif"
}


const S7Floor3 = () => {
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

export default S7Floor3