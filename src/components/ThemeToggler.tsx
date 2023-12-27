'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

import { FaLightbulb } from "react-icons/fa";
import { TbBulb, TbBulbFilled } from "react-icons/tb";

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
            <div className="rounded-full">
                <TbBulb size={30}/>
            </div> : <div className=" rounded-full">
                    <MdDarkMode   size={30}/>
                </div>
            }
            

        </button>
    )
}

// this we'll try later
// <div>
//                                     <div className="w-24 h-10 px-4 py-2 bg-white rounded-[29px] justify-start items-start gap-4 inline-flex">
//                                         <div className="w-6 h-6 bg-slate-950 rounded-[20px] justify-center items-center flex">
//                                             <div className="w-6 h-6 relative">
//                                             </div>
//                                         </div>
//                                         <div className="rounded-[20px] justify-start items-start gap-2.5 flex">
//                                             <div className="w-6 h-6 relative">
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>