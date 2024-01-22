import SingleBlogDetails from "@/components/blogs/SingleBlogDetails";

async function extractSingleBlogData(id: string){

    const res = await fetch(`${process.env.URL}/api/post/single-blog-page?blogId=${id}`,{
        method: 'GET',
        cache: 'no-store'
    })

    const extracedtSingleBlogDataFromBE = await res.json()

    // console.log('extracedtSingleBlogDataFromBE',extracedtSingleBlogDataFromBE);
    
    if(extracedtSingleBlogDataFromBE.success){ 
        return extracedtSingleBlogDataFromBE.data;
    }

}

export default async function SingleBlogDetailsPage({params}: {params:{id:string}}){

    const {id} = params;
    const SingleBlogDataInPage = await extractSingleBlogData(id);

    return (<div>
        <SingleBlogDetails SingleBlogData={SingleBlogDataInPage} />
    </div>)
}