import { prisma } from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {

        const url = new URL(request.url)
        const extractedCategory = url.searchParams.get("categoryID")

        const getPostForCategory = await prisma.post.findMany({
            where:{
                category: extractedCategory || ""
            }
        })

        if(getPostForCategory){
            return NextResponse.json({
                success: true,
                data: getPostForCategory
            })
        }else {
            return NextResponse.json({
                success: false,
                message: `Failed to get data. Please Try again`
            })
            
        }
        
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            message: `Couldn't get anything for the category page. Please Try again`
        })
        
    }
}
