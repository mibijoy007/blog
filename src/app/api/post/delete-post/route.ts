import { prisma } from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
    try {
         //    const url = new URL(request.url)
       const url = new URL(request.url)
       const extractedIdToDelete = url.searchParams.get('id')
    //    console.log('URL =>', url);
    //    console.log('extractedIdToDelete =>', extractedIdToDelete);
       

       const postsToDelete = await prisma.post.delete({
            where:{
                   id: Number(extractedIdToDelete)
            }
       })
        
       if(postsToDelete){
        return NextResponse.json({
            success: true,
            data:postsToDelete
        })
       }
       else{
        return NextResponse.json({
            success: false,
            message: `Couldn't get the id to delete.Try again`
        })

       }

        
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            message: `Couldn't delete for error. Try again`
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


