import { prisma } from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
    //    const url = new URL(request.url)
       const url = new URL(request.url)
       const extractedQuery = url.searchParams.get('query')
    //    console.log('REQUEST =>', request);
    //    console.log('URL =>', url);
    //    console.log('Extracted Query =>', extractedQuery);
       

       const searchedPostList = await prisma.post.findMany({
            where:{
                    OR:[
                        {
                            title:{
                                contains: extractedQuery || ""
                            }
                        },
                        {
                            description:{
                                contains: extractedQuery || ""
                            }
                        },
                        {
                            userid:{
                                contains: extractedQuery || ""
                            }
                        },
                        {
                            category:{
                                contains: extractedQuery || ""
                            }
                        },
                    ]
            }
       })
        
       if(searchedPostList){
        return NextResponse.json({
            success: true,
            data:searchedPostList
        })
       }
       else{
        return NextResponse.json({
            success: false,
            message: 'Search failed!'
        })

       }

    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            message: 'GETTing failed Please Try again'
        })
        
    }
}


