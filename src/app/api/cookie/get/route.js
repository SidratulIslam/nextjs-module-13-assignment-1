import { NextResponse } from 'next/server'

export async function GET(req,res) {
    let theme =req.cookies.get('theme')
    let language =req.cookies.get('language')

    if(!theme || !language) {
        return NextResponse.json([])
    } else {
        return NextResponse.json([theme, language])
    }

}
