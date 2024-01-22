// This is for the comments
import { prisma } from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
    try {
        const extractedData = await request.json()
        const updateBlogData = await prisma.post.update({
            where:{
                id: Number(extractedData.id)
            },
            data: {
                comments: extractedData.comments
            }
        })

        if(updateBlogData){
            return NextResponse.json({
                success: true,
                data: updateBlogData
            })
        }else{
            return NextResponse.json({
                success: false,
                message: "Failed to update data for comments"
            })
        }
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            message: 'Please Try again'
        })
        
    }
}


////the boiler code for all requests (POST, GET , UPDATE) then we have to add some 
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(request: NextRequest) {
//     try {
        
//     } catch (error) {
//         console.log(error);

//         return NextResponse.json({
//             success: false,
//             message: 'Please Try again'
//         })
        
//     }
// }


