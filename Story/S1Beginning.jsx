import Nav from "../Assets/Nav"
import StoryScreen from "../Screens/StoryScreen"

const text = "You are 10 Floors deep down a dungeon for apparently no reason . Hopefully you will ascend alive"
const S1Beginning = () => {
  return (
    <div>
        <Nav/>
        <StoryScreen text={text} next={"/blessings"}/>
    </div>
  )
}

export default S1Beginning