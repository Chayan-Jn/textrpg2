import { useState,useContext,createContext} from "react"

const HealthContext = createContext()

export function getData(){
    return useContext(HealthContext)
}


export const HealthProvider = ({children})=>{

    
    const [playerHP, setPlayerHP] = useState(100); 
    const [maxPlayerHP,setMaxPlayerHP] = useState(100);
    const[playerDMG,setPlayerDMG] = useState(5)


    const value = {
        playerHP,
        setPlayerHP,
        maxPlayerHP,
        setMaxPlayerHP,
        playerDMG,
        setPlayerDMG
    };

    return(
        <HealthContext.Provider value={value}>
            {children}
        </HealthContext.Provider>
    )

}

