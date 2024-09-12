'use client'
import Button from "@/components/Button";
import Bloglist from "@/components/blogs/BlogList";
import SingleBlogCard from "@/components/blogs/SingleBlogCard";
import { BlogType } from "@/utils/Types";
import { fetchConfig } from "firebase/remote-config";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";



export default function Search() {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const router = useRouter();

    function handleSearchBarInput(event: ChangeEvent<HTMLInputElement>) {

        setSearchQuery(event.target.value);
    }

    async function helperSearchForDeleting(queryHandelingDelete: string){
        if (searchQuery !== '') {
            const res = await fetch(`/api/search?query=${queryHandelingDelete}`, {
                method: 'GET',
                cache: "no-store"
            }) 

            const searchedData = await res.json();
            // console.log("searchedData===>", searchedData);
            if (searchedData.data.length) {
                // setSearchQuery('');   //nope don't want the search bar to be emtpy after one attempt. Try something else. Later 
                setSearchResults(searchedData.data)
            }
            // else alert('Nothing found')
            else toast('Nothing found',
                {
                  icon: '🤷‍♂️',
                  style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                  },
                }
              );

        }
        else {
            // alert("Search Bar is empty!")
            toast("Search Bar is empty!",
                {
                  icon: '❌',
                  style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                  },
                }
              );
        }

    }


    async function handleSearchButton() {
        // console.log("searchQuery ==> ", searchQuery)

           helperSearchForDeleting(searchQuery);

          


    }

    // console.log("searchResults-----", searchResults);


///********************************************************************************** */
//This function is not in use we'll solve it later
    async function handleDeleteSearchPage(idToDete: number) {
        // console.log(id , "jjjjj")
    
        const res = await fetch(`/api/post/delete-post?id=${idToDete}`,{
            method: 'DELETE',
            cache: 'no-store'
        })

        const resData = await res.json();
        // console.log("resData=====>",resData) 

        if(resData && resData.success) {
            helperSearchForDeleting(searchQuery);
            // router.refresh() 
        }
        // else setSearchResults(searchResults)
    }


    return (
        <section className="overflow-hidden py-16 ">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-black sm:p-[50px] lg:mb-5 lg:px-8 xl:p-[55px]">
                            <h2 className="mb-6 text-xl text-center font-bold text-black dark:text-white sm:text-3xl lg:text-4xl xl:text-5xl">
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
                                    <Button title="Go" onClick={handleSearchButton} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="container -mx-4">
                        {
                            searchResults && searchResults.length ?
                                <div>
                                    <h1 className="mx-4 pt-8 text-body-color">
                                      {'=>'} {searchResults.length} blogs found
                                    </h1>
                                    <div className="-my-16">
                                        <Bloglist list={searchResults}  />

                                    </div>
                                </div>

                                : null //<h1 className="text-2xl mt-9 font-extrabold">Nothing found. . .</h1>
                        }
                    </section>
                </div>
            </div>
        </section>
    )
}