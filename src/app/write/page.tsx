'use client'

import Button from "@/components/Button"
import { Progress } from 'antd';
import { firebaseConfig, storage } from "@/utils/FirebaseConfig"
import { FormItems } from "@/utils/FormItems"
import { BlogCatagoriesType, CreateblogFormDataType } from "@/utils/Types"
import { error } from "console"
// import firebase from "firebase/compat/app"
import firebase from 'firebase/app'
import 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import React, { useState } from "react"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";


const initialBlogFormData = {
    title: '',
    category : '',
    description: '',
    image: ''
}

export function CreateUniqueFileName(fileName: string){
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 10); // Random string of 6 characters
    // return fileName+"-"+timeStamp+"-"+randomString;
    return `${fileName}-${timestamp}-${randomString}`;
}
// console.log(CreateUniqueFileName("asbcd"))


////////https://firebase.google.com/docs/storage/web/upload-files#web-version-10
// Create the file metadata 
// /** @type {any} */
const metadata: any = {
    contentType: 'image/jpeg'
  };

//   console.log('bucket', process.env.NEXT_PUBLIC_FIREBASE_APPID)
//   console.log('FIREBASE', firebaseConfig.storageBucket)
//this is where i found the error as the file couldn't access the env vatiables and had to use ( NEXT_PUBLIC_ ) at the start of each one

export default function Write(){
    
    const [blogFormData, setBlogFormData] = useState<CreateblogFormDataType>(initialBlogFormData)
    const [imageLoading, setImageLoading] = useState<boolean>(false);
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const {data: session} = useSession();
    const router = useRouter()

    // console.log(session,'session');
    


    async function handleSaveImageToFirebase(file: any){
        const uniqueImageFileName = CreateUniqueFileName(file?.name)

        const storageRef = ref( storage ,`blog/image/${uniqueImageFileName}`) //form the FireBaseConfig.js file
        
        const uploadImage = uploadBytesResumable(storageRef, file, metadata);
        
        return new Promise((resolve, reject) => {
            uploadImage.on('state_changed',
                 (snapshot)=> {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        setUploadProgress(progress); //see the upload pregress

                        console.log('Upload is ' + progress + '% done');
                        switch (snapshot.state) {
                          case 'paused':
                            console.log('Upload is paused');
                            break;
                          case 'running':
                            console.log('Upload is running');
                            break;
                         }
                 },
                 (error) => {
                    // A full list of error codes is available at
                          // https://firebase.google.com/docs/storage/web/handle-errors
                          switch (error.code) {
                              case 'storage/unauthorized':
                                // User doesn't have permission to access the object
                                break;
                              case 'storage/canceled':
                                // User canceled the upload
                                break;
                        
                              // ...
                        
                              case 'storage/unknown':
                                // Unknown error occurred, inspect error.serverResponse
                                break;
                            }
                 },
                 () => {
                          getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                            resolve(url)
                             console.log("File available at the url")}).catch(error => reject(error))
            })
        })
    }
    // console.log("firebase==",firebaseConfig);
async function handleCreateBlogImage(event: React.ChangeEvent<HTMLInputElement>) {
    // console.log(event)
    if (!event.target.files) return null; // to avoid "event.target.files" can be null.
    // console.log(event.target.files[0].name) //imagefile name

    setImageLoading(true);
    const saveImageToFirebase: any = await handleSaveImageToFirebase(event.target.files[0])
    // console.log("saveImageToFirebase",saveImageToFirebase)
    if (saveImageToFirebase !== ''){
        setImageLoading(false)
        // console.log("saveImageToFirebase",saveImageToFirebase)
        setBlogFormData({
            ...blogFormData,
            image: saveImageToFirebase
        })

    }
}

// console.log('formdata=',blogFormData);

async function handleCreateBlogPost(){
    // console.log(blogFormData);

    // const res = await fetch("/api/post/add-post", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       ...blogFormData,
    //       userid: session?.user?.name,
    //       userimage: session?.user?.image,
    //       comments: [],
    //     }),
    //   });
  
    //   const data = await res.json();
  
    //   console.log(data, "data123");

    const  res = await fetch('/api/post/add-post',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
            ...blogFormData,
            userid: session?.user?.name,
            userimage: session?.user?.image,
            comments: []
        }),
    })
    
    const data = await res.json();
    console.log(data, "data");
    // alert(data.message);
    toast(data.message,
        {
          icon: '📝',
          style: {
            borderRadius: '10px',
            background: '#1c98ed',
            color: '#fff',
          },
        }
      );
    
    
    if (data && data.success){
        router.push('/blogs')
    }
    
}



 return(
        <section className="overflow-hidden py-16 md:py-20 lg:py-20">

            <Toaster
  position="top-center"
  reverseOrder={false}
/>

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
                                        <div  className="flex flex-col w-full   mb-8 rounded-md border border-transparent py-5 pb-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp">
                                            <input 
                                            type="file" 
                                            id="Imageinput"
                                            accept="image/*"
                                            max={1000000} //this is useless
                                            onChange={handleCreateBlogImage}
                                            className="pb-5"
                                            />
                                            <div className="text-white">
                                            <Progress percent={Math.ceil(uploadProgress)} />

                                            </div>
                                           

                                        </div>
                                        <div>
                                            {/* {if(event.target.files[0].size > 1000000) return <div>Too big</div>} */}
                                        </div>
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
                                                         required
                                                         placeholder={items.placeholder}
                                                         name={items.id}
                                                         onChange={
                                                                    (event: React.ChangeEvent<HTMLInputElement>) =>{
                                                                        setBlogFormData({
                                                                            ...blogFormData,
                                                                            // title: event.target.value
                                                                            [items.id]: event.target.value //two lines are the same
                                                                        })
                                                                    }   
                                                         }
                                                         value={blogFormData[items.id as keyof CreateblogFormDataType]} //Recommended
                                                         className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                                         /> : 
                                                         items.formElement === "textarea"?
                                                         <textarea
                                                         required
                                                         placeholder={items.placeholder}
                                                         name={items.id}
                                                         onChange={
                                                            (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
                                                                setBlogFormData({
                                                                    ...blogFormData,
                                                                    // description: event.target.value
                                                                  [items.id]: event.target.value //two lines are the same but this one is better
                                                                  //the [ ] brackets is because of Computed Property Names or items doesn't exit on type
                                                              })
                                                            }   
                                                          }
                                                          value={blogFormData[items.id as keyof CreateblogFormDataType]} //Recommended
                                                         rows={5}
                                                         className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                                         />:
                                                         items.formElement === "select"?
                                                          <select
                                                          required
                                                          key={items.id}
                                                          id={items.id}
                                                        //   name={items.id}
                                                        onChange={
                                                            (event: React.ChangeEvent<HTMLSelectElement>) =>{
                                                                setBlogFormData({
                                                                    ...blogFormData,
                                                                    // category: event.target.value
                                                                    [items.id]: event.target.value //two lines are the same but this one is better
                                                                    //the [ ] brackets is because of Computed Property Names or items doesn't exit on type
                                                                })
                                                            }   
                                                        }
                                                        value={blogFormData[items.id as keyof CreateblogFormDataType]}
                                                          className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                                                          > 
                                                            <option value="">Select</option>
                                                            {items.blogCatagoriesOptions.map(catagories => (
                                                                <option 
                                                               
                                                                value={catagories.value}
                                                                >
                                                                {catagories.label}
                                                               
                                                                </option>
                                                            ))}   
                                                          </select> : null }
                                                </div>
                                            ))}
                                            <div className="w-full px-3">
                                                <Button title="Create Blog" onClick={handleCreateBlogPost} />
                                            </div>
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



// async function handleSaveImageToFirebase(file: any){
//     const uniqueImageFileName = CreateUniqueFileName(file?.name)

//     const storageRef = ref( storage ,`blog/image/${uniqueImageFileName}`) //form the FireBaseConfig.js file
    
//     const uploadImage = uploadBytesResumable(storageRef, file);
    
//     return new Promise((resolve, reject) => {
//         uploadImage.on('state_changed',
//              (snaphot)=> {

//              },
//              (error) => {
//                 reject(error)
//              },
//              () => {
//                       getDownloadURL(uploadImage.snapshot.ref).then((url) => {
//                                                                                resolve(url)
//                                                                                console.log("File available at ", url)
//                                                                                  }).catch(error => reject(error))
//         })
//     })
// }
// // console.log("firebase==",firebaseConfig);
// async function handleCreateBlogImage(event: React.ChangeEvent<HTMLInputElement>) {
// // console.log(event)
// // console.log(event.target.files[0]) //imagefile name
// if (!event.target.files) return null; // to avoid "event.target.files" can be null.

// setImageLoading(true);
// const saveImageToFirebase = await handleSaveImageToFirebase(event.target.files[0])

// if (saveImageToFirebase !== ''){
//     setImageLoading(false)
//     console.log("saveImageToFirebase",saveImageToFirebase)

// }
// }