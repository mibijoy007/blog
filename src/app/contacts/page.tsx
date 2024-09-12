'use client'


import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { TfiFacebook } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

export default function Contacts(){

    return(
        <section className="overflow-hidden py-16 md:py-20 lg:py-28">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mb-12 rounded-md bg-primary/[6%] py-11 px-8 dark:bg-dark/30 sm:p-[50px] lg:mb-5 lg:px-8 xl:p-[55px]">
                            <h2 className="mb-2 text-3xl text-center font-bold text-black dark:text-white sm:text-3xl lg:text-4xl xl:text-5xl">
                                 Contacts
                            </h2>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-4">
                                    <p>
                                     <br />
                                     <span className="lg:font-bold mr-1">Email:</span> 
                                     <Link href={"mailto:mibijoy007@gmail.com"}
                                     className="hover:underline hover:text-blue cursor-pointer "
                                     >
                                        mibijoy007@gmail.com
                                     </Link>


                                    <br />
                                    {/* Phone: xxxxxxxx */}
                                    <br /><br />
                                    Socials: <br /><br />
                                    {/* <div className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp">                                     */}
                                    <div className="flex gap-5 lg:gap-10"> 

                                    {/* <Link href={'https://facebook.com'}>
                                        <TfiFacebook size={40} />
                                    </Link>  */}

                                    <Link href={'https://x.com/maksudulislam71'}
                                    className="hover:border-b-2 border-r-primary rounded-sm"
                                    >
                                    <FaXTwitter  size={40} />
                                    </Link>    
                                    <Link href={'https://www.linkedin.com/in/maksudul998/'}
                                    className="hover:border-b-2 border-r-primary rounded-sm"
                                    >                              
                                    <FaLinkedinIn size={40} />
                                    </Link>
                                    <Link href={'https://github.com/mibijoy007'}
                                    className="hover:border-b-2 border-r-primary rounded-sm"
                                    >
                                    <FiGithub size={40} />
                                    </Link>
                                    <Link href={'https://www.youtube.com/@maksudulislambijoy9811'}
                                    className="hover:border-b-2 border-r-primary rounded-sm"
                                    >
                                    <FaYoutube  size={45} />
                                    </Link>
                                    </div>
                                   
                                    </p>                                    
                                </div>
                                <div>
                                    {/* <Button title="Go" onClick={()=>{}} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}