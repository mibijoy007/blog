import { prisma } from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const getAllPosts = await prisma.post.findMany();
        
        if(getAllPosts && getAllPosts.length){
            return NextResponse.json({
                success: true,
                data: getAllPosts
            })
        }
        else {
            return NextResponse.json({
                success: false,
                message: 'Failed to get all data from DB'
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


