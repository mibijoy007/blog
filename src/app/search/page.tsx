'use client'
import Button from "@/components/Button";
import { fetchConfig } from "firebase/remote-config";
import { ChangeEvent, useState } from "react";

// async function SearchApi(){
//     const response = await fetch(`/api/search?query=cu`,{
//         method: 'GET',
//         cache:"no-store"
//     }) 
//     console.log("aaaaaaaaaaaaa",response)
// }
// SearchApi()


export default function Search(){
    const [searchQuery,setSearchQuery] = useState('')
    const [searchResults,setSearchResults] = useState([])

    function handleSearchBarInput(event : ChangeEvent<HTMLInputElement>){
        
        setSearchQuery(event.target.value);
    }

    async function handleSearchButton(){
      console.log("searchQuery ==> ",searchQuery)

      if(searchQuery !== ''){
      const res = await fetch(`/api/search?query=${searchQuery}`,{
        method: 'GET',
        cache:"no-store"
    }) 

    const searchedData = await res.json();
    console.log("searchedData===>",searchedData);
    
    
        if(searchedData.data.length > 0) setSearchResults(searchedData.data)
        else alert('Nothing found')
    
    }
    else{
        alert("Search Bar is empty!!!")
    }


    }

    return(
        <section className="overflow-hidden py-16 md:py-20 lg:py-28">
             <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[50px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-xl text-center font-bold text-black dark:text-white sm:text-3xl lg:text-4xl xl:text-5xl">
              🔍 Search
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <input 
                    type="text" 
                    name="search"
                    id="search"
                    placeholder="Search blogs"
                    autoFocus
                    autoComplete="off"
                    className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    value={searchQuery}
                    onChange={handleSearchBarInput}
                    />
                </div>
                <div>
                    <Button title="Search" onClick={handleSearchButton}/>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </section>
    )
}