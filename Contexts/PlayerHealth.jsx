import { useState,useContext,createContext} from "react"

const HealthContext = createContext()

export function getData(){
    return useContext(HealthContext)
}


export const HealthProvider = ({children})=>{

    
    const [playerHP, setPlayerHP] = useState(100); 
    const [maxPlayerHP,setMaxPlayerHP] = useState(100);
    const[playerDMG,setPlayerDMG] = useState(5);

    const [invitems,setInvItems] = useState([
        { id: 1, name: '', src: '', empty: true },
        { id: 2, name: '', src: '', empty: true },
        { id: 3, name: '', src: '', empty: true },
        { id: 4, name: '', src: '', empty: true },
        { id: 5, name: '', src: '', empty: true }
    ])



    const value = {
        playerHP,
        setPlayerHP,
        maxPlayerHP,
        setMaxPlayerHP,
        playerDMG,
        setPlayerDMG,
        invitems,
        setInvItems
    };

    return(
        <HealthContext.Provider value={value}>
            {children}
        </HealthContext.Provider>
    )

}

