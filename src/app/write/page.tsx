'use client'

import { FormItems } from "@/utils/FormItems"

export default function(){
    
    return(
        <section className="overflow-hidden py-16 md:py-20 lg:py-20">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mb-12 rounded-2xl bg-primary/[3%] py-10 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] px-8">
                            <h2 className="mb-3 text-2xl font-bold text-[#585858] dark:text-lessWhite sm:text-3xl lg:text-2xl xl:text-3xl">
                                Write your own blog...

                            </h2>
                            <div id="form-for-writing-a-blog">
                                <div className="flex  flex-col gap-3">
                                    <div>
                                        <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                                        Upload Image
                                        </label>
                                        <input 
                                        type="file" 
                                        id="Imageinput"
                                        accept="image/*"
                                        max={1000000}
                                        className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                        />
                                    </div>
                                    <div className="-mx-4 flex flex-wrap">
                                        {/* here */}
                                        {
                                            FormItems.map(items => (
                                                <div className="w-full px-3">
                                                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                                                        {items.label}
                                                    </label>
                                                    {
                                                        items.formElement === "input" ?
                                                         <input 
                                                         type={items.type} 
                                                         placeholder={items.placeholder}
                                                         name={items.id}
                                                         className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                                         /> : 
                                                         items.formElement === "textarea"?
                                                         <textarea
                                                         placeholder={items.placeholder}
                                                         name={items.id}
                                                         rows={5}
                                                         className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                                         />:
                                                         items.formElement === "select"?
                                                          <select
                                                          id={items.id}
                                                        //   name={items.id}
                                                          className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                                          > 
                                                          {/* <option value="">Select</option> */}
                                                          
                                                            {items.blogCatagoriesOptions.map(catagories => (
                                                                <option 
                                                               
                                                                value={catagories.value}
                                                                >
                                                                {catagories.label}
                                                               
                                                                </option>
                                                            ))}   

                                                          </select> : null
                                                         
                                                    }
                                                    


                                                </div>
                                            ))
                                        }
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}