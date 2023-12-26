'use client'

export default function Button ({title,onClick}:{title:string ,onClick: ()=> void}){
    return(
        <button 
            className="rounded-md bg-primary py-4 px-5 font-medium text-white hover:bg-opacity-80 hover:shadow-signUp"
            onClick={onClick}>
            {title}
        </button>
    )
}