import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET (content: any) {

    const userData = user.filter((item) => item.id == content.params.id)
    console.log(userData);
    return NextResponse.json(
        userData.length === 0 ? {result:"No Data Found", success:false} : {result:userData[0], success:true} , { status: 200 })
}

//request=data, content=id
export async function PUT(request: any, content: any) {

    const payload = await request.json();
    payload.id =  content.params.id;
    console.log(payload);
    
    if(!payload.name || !payload.email || !payload.age ){
        return NextResponse.json({result : "there is some error, please check the required fields", success:false}, {status : 400})
    }
    return NextResponse.json({result : payload, success:true}, {status : 200})
}

export function DELETE( content : any){
    
    let id = content.params.id;
    console.log(id);  
    if(id){
        return NextResponse.json({result:"User deleted", success: true}, {status: 200})
    }
    else{
        return NextResponse.json({result:"Internal error, Please try after sometime", success: false}, {status: 400})
    }
    
}