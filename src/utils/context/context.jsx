import {createContext, useState} from "react";

export const ClickContext = createContext()

export const ClickContextProvider = ({children})=> {
    const [clicked, setClicked] = useState('');

    return (
        <ClickContext.Provider value={{clicked, setClicked}}>
            {children}
        </ClickContext.Provider>
    )
}