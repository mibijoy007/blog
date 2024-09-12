'use client'

import { BlogType } from "@/utils/Types"
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";



export default function SingleBlogCard({ singleBlogItem }: { singleBlogItem: BlogType }) {

    const {data: session} = useSession();
    const { id,
            title,
            description,
            image,
            category,
            userid,
            userimage,
            comments } = singleBlogItem;
    
    const titleForURL = title.toLocaleLowerCase().replace(/\s+/g, '-');

    const router = useRouter();

        // console.log(session?.user?.name,"&&&",userid);
        
        async function handleDelete(idToDete: number) {
            // console.log(id , "jjjjj")
        
            const res = await fetch(`/api/post/delete-post?id=${id}`,{
                method: 'DELETE',
                cache: 'no-store'
            })

            const resData = await res.json();
            // console.log("resData=====>",resData) 

            if(resData && resData.success) router.refresh(); 
        }
    return (
        <div>
           
            <div className="relative overflow-hidden rounded-md bg-[#f9faff] shadow-one dark:bg-dark">

                <Link 
                    className="relative block h-60 w-full" 
                    href={`/blogs/${id}`}>
                        
                        <Link href={'/category'}>
                    <span className="absolute top-3 right-3 z-20 inline-flex items-center rounded-full bg-primary hover:bg-primary/80 py-2 px-4 text-sm font-semibold capitalize text-white">
                        {category}
                    </span>
                    </Link>
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
                     : <div className="p-5 text-body-color font-serif">*No Image</div> }
                </Link>
                <div>
                <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
                        <Link
                            className="mb-4 text-ellipsis overflow-hidden whitespace-nowrap block text-xl font-bold text-black dark:text-white sm:text-2xl"
                            // href={`/blogs/${titleForURL}`}
                            href={`/blogs/${id}`}
                            >
                            <h2 className=" hover:text-primary/90  dark:hover:text-primarys">
                            {title}
                    </h2>
                    <p className="h-5 text-ellipsis overflow-hidden whitespace-nowrap mb-6 pb-6 text-base text-body-color dark:border-white dark:border-opacity-10">
                        {description}
                    </p>
                        </Link>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-3">
                            <div className="mr-4">
                                <div className="h-10 w-10  relative overflow-hidden rounded-full">
                                    <Image alt="User Image" src={userimage} fill />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="mb-1 text-sm font-medium text-dark dark:text-white">
                                 {userid.split('_')[0].toUpperCase()}

                                </p>
                            </div>
                        </div>
                        <div className='cursor-pointer hover:border-b-2 hover:dark:border-white hover:border-black'>
                                
                                {/* we have to check if the user is the owner or not then he can "delete" this by using session*/}
                                {
                                    session?.user?.name === userid ? 
                                        <FaTrash 
                                         className="p-1"
                                        size={30} 
                                        onClick={() => {handleDelete(id)}}
                                        /> 
                                    
                                        : null

                                }
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
           
        </div>

    )
}