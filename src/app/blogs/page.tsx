import Bloglist from "@/components/blogs/BlogList";


async function extractAllPosts() {
    const res = await fetch (`${process.env.URL}/api/post/get-all-posts`,{
        method: 'GET',
        cache: 'no-store'
    })
    const extractedData = await res.json();

    if(extractedData.success) return extractedData.data;
}


export default async function Blogs() {
    
    const blogPostList = await extractAllPosts()
    // console.log(blogPostList,"blogPostList")
    
    
    

    return (
        <div>
            <Bloglist list={blogPostList}/>        
        </div>
    )
}