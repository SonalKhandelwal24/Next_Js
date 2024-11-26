import { NextResponse } from "next/server";

export function middleware(request : {
    nextUrl: any; url: string | URL | undefined; 
}){

    // if(request.nextUrl.pathname !== '/login'){
        // return NextResponse.redirect(new URL('/login', request.url));
    // }

    // console.log(middleware);

}

// export const config = {
//     matcher:['/about/:path*', '/studentlist/:path*']
// }


