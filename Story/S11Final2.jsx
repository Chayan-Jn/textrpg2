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

const images2 = {enemyImage:'../images/final/snake1.gif',enemyDeathImage:'../images/final/snakedie.gif'}

const info2 =  {messsage:"cat disappeared snake appeared??",Name:'Snek'}

const S11Final2 = () => {

  return (

      <div className="phase2">
        <BattleScreen 
        images={images2}
        info={info2} edmg={7} eHP={20} mEHP={20} 
        dieTime={0.5} next={"/Dream"}/>
      </div>


  )
}

export default S11Final2