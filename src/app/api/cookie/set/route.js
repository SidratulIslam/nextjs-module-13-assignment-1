import { NextResponse } from 'next/server'

export async function GET(req,res) {

    return NextResponse.json(
        {status:true,message:"Cookies are set now"},
        {
            status: 201,
            headers: { 'Set-Cookie': ['theme=dark; Path=/', 'language=en; Path=/'] },
        }
    )
}