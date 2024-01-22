'use client'

import { BlogType } from "@/utils/Types"
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { ChangeEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function SingleBlogDetails({ SingleBlogData }: { SingleBlogData: BlogType }) {

    // console.log('SingleBlogData', SingleBlogData);

    const [comment, setComment] = useState<string>('')
    const { data: session } = useSession();
    const router = useRouter()

    async function handleCommentsSave() {
        let allComments = [...SingleBlogData.comments]
        if (comment !== '') {
            allComments.push(`${comment}|${session?.user?.name}`)

            const response = await fetch(`/api/post/update-post`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: SingleBlogData?.id,
                    comments: allComments,
                })
            });
            const commentsData = await response.json();
            // console.log('commentsData===>', commentsData);

            if (commentsData && commentsData.success) {
                setComment('');
                router.refresh();
            }
        }
        else alert("Comment is empty")
    }

    if (!SingleBlogData) return null;

    return (
        <div>
            <section className=" pt-[150px] pb-[120px]">
                <div className="container ">
                    <div className="-mx-4 flex flex-col gap-4 items-center justify-center ">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                                    {SingleBlogData?.title}
                                </h2>
                                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                                    <div className="flex flex-wrap items-center">
                                        <div className="mr-10 mb-5 flex items-center">
                                            <div className="mr-4">
                                                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                                    <Image src={SingleBlogData?.userimage} alt="User-Image" fill />
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <h4 className="mb-1 text-base font-medium text-body-color">
                                                    By
                                                    <span className="pl-2">
                                                        {SingleBlogData?.userid.split('_')[0]}
                                                    </span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <Link
                                            className="inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold text-white"
                                            href={`/category/${SingleBlogData?.category}`}
                                        >
                                            {SingleBlogData?.category}
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-10 w-full overflow-hidden rounded">
                                        <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                                            <Image
                                                src={SingleBlogData?.image}
                                                alt="Blog-image"
                                                fill
                                                className="object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                    <p className="mb-8 leading-relaxed text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                        {SingleBlogData?.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* This comment section */}
                        <div className="w-full lg:w-8/12 flex gap-4">
                            {/* The following is if you don't want the guest users to comment you can use the following */}
                            {/* {
                            session !== null ? 
                                <div>
                                    <input
                                name="comment"
                                id="comment"
                                autoFocus
                                autoComplete="off"
                                placeholder="Add your comment here"
                                // {comment !== '' ?  value={comment}: alert("Comment is empty")}
                                value={comment}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => { setComment(event.target.value) }}
                                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                            />
                                </div> 
                            : null
                            
                            } */}

                            <input
                                name="comment"
                                id="comment"
                                autoFocus
                                autoComplete="off"
                                placeholder="Add your comment here"
                                // {comment !== '' ?  value={comment}: alert("Comment is empty")}
                                value={comment}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => { setComment(event.target.value) }}
                                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                            />
                            <Button title="Add" onClick={handleCommentsSave} />
                        </div>
                        <section className="dark:bg-dark pl-4 rounded-lg py-8 lg:py-8 w-full lg:w-8/12">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-l pl-2 lg:text-2xl font-bold text-black dark:text-white">
                                    Discussion ({SingleBlogData?.comments.length})
                                </h2>
                            </div>
                            {SingleBlogData?.comments.length > 0 ?
                                SingleBlogData?.comments.map((comment) => (
                            <div className="p-6 text-base rounded-lg dark:bg-gray-900">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center">
                                        <p className="inline-flex items-center mr-3 text-sm text-black dark:text-white font-semibold">
                                            {
                                                comment.split('|')[1] == SingleBlogData?.userid ?
                                                    `${comment.split('|')[1].split('_')[0]}(Author)`
                                                    :comment.split('|')[1].split('_')[0] !== undefined ? `(Guest User-${Math.floor(Math.random()*1000000+1)})`
                                                    // This is just random for now. later we'll try to use session cookies to indentify guest users
                                                        : comment.split('|')[1].split('_')[0]
                                                
                                            }
                                        </p>
                                    </div>
                                </div>
                                <p className="pl-3 text-gray-500 dark:text-gray-400">
                                    {comment.split('|')[0]}
                                </p>
                            </div>
                            ))
                            
                            : null}
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
}