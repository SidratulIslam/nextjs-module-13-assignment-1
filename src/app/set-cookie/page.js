'use client';
import Head from 'next/head'
import setCookie from "@/lib/setCookie";

export default function SetCookie() {

    const handleClick = () => {
        // Set a set-cookie with the name 'theme' and the value 'dark'
        setCookie()
        alert('Cookies set')
    };
    return (
        <div className="container mx-auto px-4">
            <Head>
                <title>Set Cookie</title>
            </Head>
            <div className="container">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Set Cookie</button>
            </div>
        </div>
    )
}
