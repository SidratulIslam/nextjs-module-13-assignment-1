'use client';
import Head from 'next/head'
import getCookie from "@/lib/getCookie";

export default async function GetCookie() {
    const cookies = await getCookie()
    return (
        <div className="container mx-auto px-4">
            <Head>
                <title>Get Cookie</title>
            </Head>
            <div className="container">
                <div className="flex flex-wrap">
                    {cookies.map((cookie) => (
                        <div className="m-5" key={cookie.name}>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">  {cookie.name}</div>
                                        <p className="text-gray-700 text-base">
                                            {cookie.value}
                                        </p>
                                    </div>
                                </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
