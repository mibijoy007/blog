'use client'

import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"


export default function NextThemeProvider({children}:{children:ReactNode}){
    return(
        <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="dark"
        >
            {children}
        </ThemeProvider>
    )
}