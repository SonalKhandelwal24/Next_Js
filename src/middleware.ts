import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("This is middleware");

  const tokenCookie = request.cookies.get('auth_token')?.value; // Get the token from the cookies
  console.log("Token Cookie Value: ", tokenCookie); // Log the token value

  if (!tokenCookie) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  try {
    // Manually decode JWT (this does NOT verify the token)
    const base64Payload = tokenCookie.split('.')[1]; // Get the payload part
    const decodedPayload = JSON.parse(atob(base64Payload)); // Decode the base64 payload

    const role = decodedPayload.role;
    console.log("Decoded Role:", role);

    // Set a custom header for the role
    const response = NextResponse.next();
    response.headers.set('X-User-Role', role);

    // Restrict access to certain routes based on role
    if (role !== 'Admin' && (request.nextUrl.pathname.startsWith('/adminDashboard') || request.nextUrl.pathname.startsWith('/attendanceTable'))) {
      return NextResponse.redirect(new URL('/notAuthorized', request.url)); // Redirect 'User' role to not authorized page
    } 

    return response; // Return the response with the custom header
  } catch (error) {
    console.error('JWT Decoding Error:', error);
    return NextResponse.redirect(new URL('/', request.url));
  }
}

// Apply middleware to specific routes
export const config = {
  matcher: ['/adminDashboard', '/attendanceTable'], // Protect specific admin routes
};
