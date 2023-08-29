import {NextResponse} from "next/server";

export async function GET(req,res) {
    return NextResponse.redirect('/redirected-page');
}