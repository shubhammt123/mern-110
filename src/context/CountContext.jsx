import React, { createContext, useState } from 'react'

const CountContext = createContext();

export const CountProvider = ({children})=>{
    const [count , setCount] = useState(0);
    const handleIncCount = ()=>{
        setCount(count + 1);
    }
    return (
        <CountContext.Provider value={{count , handleIncCount}}>
            {children}
        </CountContext.Provider>
    )
}

export default CountContext