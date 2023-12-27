'use client'

import { NavItems } from "@/utils/NavItems"
import { NavItemsInterface } from "@/utils/Types"
import { Fascinate } from "next/font/google"
import Link from "next/link"
import { useEffect, useState } from "react"
import Button from "./Button"
import ThemeToggler from "./ThemeToggler"
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"


export default function NavBar() {
    const [sticky, setSticky] = useState<boolean>(false)
    const [navbarToggle, setNavbarToggle] = useState<boolean>(false)
    const {data: session} = useSession();

    // console.log("session",session?.user?.image)
    // console.log("session",session)
    
    function handleStickyNav() {
        if (window.scrollY > 80) setSticky(true)
        else setSticky(false)
    }

    function handleNavbarToggle() {
        setNavbarToggle(!navbarToggle)
    }
    useEffect(() => {
        window.addEventListener("scroll", handleStickyNav)
    })

    return (
        <div>
            <header
                className={`top-0 left-0 z-40 flex w-full items-center bg-transparent
            ${sticky
                        ? "!fixed !z-[9999] !bg-white !bg-opacity-100 shadow-sticky backdrop:blur-sm !transition dark:!bg-black dark:!bg-opacity-100"
                        : "absolute"
                    }
            `}
            >
                <div className="container">
                    <div className="relative -mx-4 flex items-center justify-between">
                        <div className="w-60 max-w-full px-3 xl:mr-12">
                            <Link
                                href={'/'}
                                className={`text-[30px] font-extrabold cursor-pointer block w-full
                            ${sticky ? "py-5 lg:py-2" : "py-5"}
                            `}
                            >
                                Blog
                            </Link>
                        </div>
                        <div className="flex w-full items-center justify-between px-4">
                            <div>
                                <button
                                    onClick={handleNavbarToggle}
                                    id="navbarToggler"
                                    aria-label="Mobile Menu"
                                    className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                                >
                                    <span
                                        className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarToggle ? "top-[7px] rotate-45" : ""}
                        `}
                                    />
                                    <span
                                        className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarToggle ? "opacity-0" : ""}
                        `}
                                    />
                                    <span
                                        className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white
                        ${navbarToggle ? "top-[-8px] -rotate-45" : ""}
                        `}
                                    />
                                </button>
                                <nav
                                    id="navbarCollapse"
                                    className={`absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white border-body-color/50 py-4 
                px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100

                ${navbarToggle
                                            ? "visible top-full opacity-100"
                                            : "invisible top-[120%] opacity-0"
                                        }
                `}
                                >
                                    <ul className="block lg:flex lg:space-x-12 ml-6">
                                        {NavItems.map((item: NavItemsInterface) => (
                                            <li key={item.id} className="group relative pl-[10px]">
                                                <Link
                                                    href={item.path}
                                                    className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                            <div className="flex gap-4 items-center justify-end pr-16 lg:pr-0">
                            
                            {session !== null ?  (
                                <Button title="🖋️ Write"  onClick={() =>{ } }  />
                                         ): null}
                                
                                <Button title={ session!== null ?  "Sign out" : "Sign in" }  onClick={ session!== null ? () => signOut() : () => signIn() }  />
                                <div className="flex gap-3 items-center">
                                    <ThemeToggler/>

                                    <div>
                                        {session !== null ?  (
                                        <Image 
                                        src={session?.user?.image!} 
                                        alt="Pofile Image" 
                                        width={30} 
                                        height={30}
                                        className="rounded-full"

                                        /> ): null}

                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </div>
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

