'use client'

import Button from '@/components/Button'
import { DemoPage } from '@/components/DemoPage'
import Processing from '@/components/Processing'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'


export default function Home() {

  return (
    // <div className='mt-20 container'>
    <div className=''>

      <DemoPage/>

      
      {/* <Bloglist list={blogPostList}/>   */}

      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam voluptatibus at. Animi dolores enim quos, cupiditate expedita fugiat excepturi laboriosam quisquam et quasi repellat iusto voluptatum sed pariatur eligendi possimus sapiente maxime. Minima facere odit debitis est laborum ipsa assumenda ex, officia provident eius maiores reprehenderit velit perferendis? Assumenda necessitatibus tenetur eos laboriosam vitae tempore provident magni maiores facere.</p>
      <code>
        console.log("hello")
        
      </code>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam voluptatibus at. Animi dolores enim quos, cupiditate expedita fugiat excepturi laboriosam quisquam et quasi repellat iusto voluptatum sed pariatur eligendi possimus sapiente maxime. Minima facere odit debitis est laborum ipsa assumenda ex, officia provident eius maiores reprehenderit velit perferendis? Assumenda necessitatibus tenetur eos laboriosam vitae tempore provident magni maiores facere.</p> */}

        <div className='container mt-5'>
          
        {/* <TextEditorQuill/> */}
        {/* <TextEditorTap/> */}
        </div>
      
    </div>
  )
}
