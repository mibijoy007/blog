'use client'

import { BlogListType } from "@/utils/Types"
import SingleBlogCard from "./SingleBlogCard"
import { useRouter } from "next/navigation"
import { useEffect } from "react";


export default function Bloglist({list}: {list: BlogListType[]}){

    const router = useRouter();

    useEffect(() => {
      router.refresh()
    }, [])
    
    return (
        <section className="pt-20 pb-20">
            <div className="container">
                <div className="-mx-4 grid grid-cols-3 gap-2">
                    {
                        list && list.length ?
                          list.map((listItem) => 
                          <div key={listItem.id} className="px-4">
                            <SingleBlogCard
                                singleBlogItem= {listItem}
                            />

                          </div> 
                          )
                        :null
                    }
                </div>
            </div>

        </section>
        
        )}