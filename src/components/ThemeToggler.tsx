'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export default function ThemeToggler(){
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()

    useEffect(() => {
        setMounted(true)
      }, [])
    
      if (!mounted) {
        return null
      }

    return(
        <button
            onClick={() => {setTheme( theme === 'dark' ? 'light' : 'dark' )}}
        >
            {theme === 'dark' ? 
            <div className="border-2 rounded-full">
                <MdDarkMode size={25}/>
            </div> : <div className="border-2 rounded-full">
                    <CiLight size={25}/>
                </div>
            }
            

        </button>
    )
}