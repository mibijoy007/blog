'use client'

export default function Button ({title,onClick}:{title:string ,onClick?: ()=> void}){
    return(
        <button 
        className="rounded-lg bg-[#2D92CE] py-2 px-3 tracking-tighter text-xs md:text-base md:py-2 md:px-4  text-[#E9EBEF]  hover:bg-[#56A7D7]"
        onClick={onClick}
        >
         {title}
        </button>
    )
}