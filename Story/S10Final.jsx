import React, { useState } from 'react'
import { BattleScreen } from '../Screens/BattleScreen'


/*
{enemyImage,enemyDeathImage} = images
{message,Name} = info
edmg
eHp
mEHP
next
dieTime
*/
const images1 = {enemyImage:'../images/final/evilcat.gif',
  enemyDeathImage:''
}

const info1 = {message:'On the first floor, you encounter the Evil Cat—a mischievous yet dangerous creature lurking in the shadows. With glowing eyes and sharp claws, it pounces with surprising speed. Defeat it to prove your strength before moving further.',Name:'Evil Cat'}
const S10Final = () => {

  return (

    <div className="phase1">
      <BattleScreen images={images1}
      info={info1} edmg={7} eHP={20} mEHP={20} 
      dieTime={0} next={"/Final2"}/>
    </div>

  )
}

export default S10Final