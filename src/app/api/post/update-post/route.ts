import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        
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


