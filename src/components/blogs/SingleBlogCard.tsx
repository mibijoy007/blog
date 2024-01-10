'use client'

import { BlogListType } from "@/utils/Types"
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link"
import { FaTrash } from "react-icons/fa";

export default function SingleBlogCard({ singleBlogItem }: { singleBlogItem: BlogListType }) {
    const {data: session} = useSession();
    const { id,
        title,
        description,
        image,
        catagory,
        userid,
        userimage,
        comments } = singleBlogItem;

        // console.log(session?.user?.name,"&&&",userid);
        
    return (
        <div>
            <div className="relative overflow-hidden rounded-md bg-[#f9faff] shadow-one dark:bg-dark">

                <Link 
                    className="relative block h-60 w-full" 
                    href={'/'}>
                    <span className="absolute top-3 right-3 z-20 inline-flex items-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">
                        {catagory}
                    </span>
                    {/* <Image src={image} alt="Blog Image" fill/> */}
                    { image ? <Image 
                                    src={image} 
                                    alt="Blog Image" 
                                    fill 
                                    priority
                                    // width={500}
                                    // height={30}
                                    // objectFit="cover"
                                    // layout="fixed"
                                    sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 33vw"
                                /> 
                     : <div className="p-5 text-body-color">*No Image</div> }
                </Link>
                <div>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                    <h2>
                        <Link
                            className="mb-4 text-ellipsis overflow-hidden whitespace-nowrap block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
                            href={'/'}
                        >
                            {title}
                        </Link>
                    </h2>
                    <p className="h-5 text-ellipsis overflow-hidden whitespace-nowrap mb-6 pb-6 text-base text-body-color dark:border-white dark:border-opacity-10">
                        {description}
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-3">
                            <div className="mr-4">
                                <div className="h-10 w-10  relative overflow-hidden rounded-full">
                                    <Image alt="User Image" src={userimage} fill />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="mb-1 text-sm font-medium text-dark dark:text-white">
                                    By <br /> {userid.split('_')[0].toUpperCase()}

                                </p>
                            </div>
                        </div>
                        <div>
                                
                                {/* we have to check if the user is the owner or not then he can "delete" this by using session*/}
                                {
                                    session?.user?.name === userid ? <FaTrash className='cursor-pointer' size={20} /> : null

                                }
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>

    )
}