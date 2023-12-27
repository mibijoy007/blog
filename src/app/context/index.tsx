'use client'

import Processing from "@/components/Processing";
import { useSession } from "next-auth/react";
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
    const {data: session} = useSession();

    if (session === undefined) 
    {return <Processing/>}

    return (
        <GlobalContext.Provider value={{loading, setLoading}}>
            {children}
        </GlobalContext.Provider>
    )
}