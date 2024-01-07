import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
    try {
        
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            message: 'DELETing failed Please Try again'
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


