import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req) {
    if (req.nextUrl.pathname.startsWith('/api/header')) {

        const requestHeaders = new Headers(req.headers)
        const authHeader = requestHeaders.get('Authorization');
        // Extract the token from the header value
        console.log(authHeader)
        const token = authHeader.split(' ')[1];
        requestHeaders.set('Authorization', `ModifiedBearer ${token}`);

        return  NextResponse.next({
            request: {headers: requestHeaders},
        })
    }
    if (req.nextUrl.pathname.startsWith('/api/redirect')) {
        const url = req.nextUrl;
        // Check if the URL pathname is '/'
        // Create a new URL object with the destination route '/hello-nextjs'
        const redirectUrl = new URL('/', url);
        console.log(redirectUrl)
        // Return a response object with a redirect set
        return NextResponse.redirect(redirectUrl);
        // Return a response object that will continue the middleware chain

    }
    return NextResponse.next();
}

