import {headers} from "next/headers";
import {NextResponse} from "next/server";

export async function GET(req,res) {

    const headersList = headers()
    const Token = headersList.get('Authorization')
    return NextResponse.json({ Token: Token})

}