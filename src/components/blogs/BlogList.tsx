'use client'

import { BlogType } from "@/utils/Types"
import SingleBlogCard from "./SingleBlogCard"
import { useRouter } from "next/navigation"
import { useEffect } from "react";


export default function Bloglist({list}: {list: BlogType[]}){

    const router = useRouter();

    useEffect(() => {
      router.refresh()
    }, [])
    
    return (
        <section className="pt-20 pb-20">
            <div className="container">
                <div className="-mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  flex-wrap">
                    {
                        list && list.length ?
                          list.map((listItem) => 
                          <div key={listItem.id} className="px-4 py-3 flex-none">
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