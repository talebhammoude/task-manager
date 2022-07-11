import { createContext, useState } from "react";


const RandomContext = createContext();

export function RandomProvider({ children }) {
    return (
        <RandomContext.Provider value={{ item: 1 }}>{children}</RandomContext.Provider>
    )
}




export default RandomContext;