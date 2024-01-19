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
        
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            message: `Couldn't get anything for the category page. Please Try again`
        })
        
    }
}
