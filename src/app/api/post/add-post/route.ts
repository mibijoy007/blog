import { prisma } from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        
        const extractedPostData = await request.json()
        const newCreatedPost = await prisma.post.create({
            data: extractedPostData,
        })

        // console.log(extractedPostData, 'extractedPostData');
        
        if (newCreatedPost){
            return NextResponse.json({
                success: true,
                message: 'New blog post added'
            })
        }
        else{
            return NextResponse.json({
                success: false,
                message: 'something wrong on new created post'
            })
        }

    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            message: 'POSTing failed Please Try again'
        })
        
    }
}


////the boiler code for all requests then we have to add some 
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


