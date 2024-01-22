'use client'

import Processing from "@/components/Processing";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
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

    const router = useRouter();
    const pathName = usePathname();

    if(session == null && pathName == '/write') router.push('/')

    if (session === undefined) 
    {return <Processing/>}

    return (
        <GlobalContext.Provider value={{loading, setLoading  }}>
            {children}
        </GlobalContext.Provider>
    )
}