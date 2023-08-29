import { NextResponse } from 'next/server'
import {headers} from "next/headers";

export async function GET(req,res) {

    let data = {
        message: "Welcome to our API!",
        version: "1.0"
    }
    return NextResponse.json(data)
}
