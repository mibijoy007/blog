import { prisma } from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest){
    try {
        const url = new URL(request.url)
        const blogId = url.searchParams.get("blogId")

        const blogDetatailsBasedOnId = await prisma.post.findUnique({
            where:{
                id : Number(blogId)
            }
        })

        if (blogDetatailsBasedOnId){
            // console.log('blogDetatailsBasedOnId',blogDetatailsBasedOnId);
            
            return NextResponse.json({
                success: true,
                data: blogDetatailsBasedOnId
            })
        }else{
            return NextResponse.json({
                success: false,
                message: `failed to get blog data from the database. Try again`
            })
        }

    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            success:false,
            message: `Couldn't get anything from backend. Try again`
        })
    }
}