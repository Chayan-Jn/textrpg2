import { useState } from "react"
import Nav from "../Assets/Nav"
import StoryScreen from "../Screens/StoryScreen"
import { Link } from "react-router-dom"

const text = "As you climb to the sixth floor, you're met with an unsettling silence — nothing just emptiness. But then, in the corner, you spot a small vial of dark, swirling liquid. There's no label, no indication of its purpose. The dim light catches the liquid's shimmer, almost as if it’s calling to you. You hesitate, wondering if it’s worth the risk to take it or if you should leave it behind."

const choiceStyle = {
  padding:"1rem",
  marginTop:"1rem",
  background: "linear-gradient(to right,pink,rgb(151, 62, 151),gold)",
  color:'',
  fontFamily:'MedievalSharp,cursive',
  fontWeight:'bold'
  

}
const Choices = ()=>{
  const [chose,setChosen] = useState('')
  return(
    <div>
      {!chose && (
      <>
        <button onClick={()=>setChosen('ignore')}>Ignore</button>
        <button onClick={()=>setChosen('took')}>Take It</button>
      </>
      )}
      {chose && 
      <>
        {chose=='ignore'?
        <div style={choiceStyle}>You decide not to touch it</div>:
        <div style={choiceStyle}>You pick it up and put it in your Inventory </div>}
      </>}


    </div>
  )
}

const next = "/Floor5"
const S4Floor6 = () => {
  return (
    <div>
      <Nav/>
      <StoryScreen text={text} Extra ={<Choices/>} next={"/Floor5"}/>
    </div>
  )
}

export default S4Floor6