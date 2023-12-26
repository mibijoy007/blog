'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

type GlobalContextType ={
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>
}

const initialState={
    loading: false,
    setLoading: ()=>{}
}

export const GlobalContext = createContext<GlobalContextType>(initialState)


export default function GlobalState({children}:{children: ReactNode}){
    const [loading, setLoading] = useState(false)
    return (
        <GlobalContext.Provider value={{loading, setLoading}}>
            {children}
        </GlobalContext.Provider>
    )
}