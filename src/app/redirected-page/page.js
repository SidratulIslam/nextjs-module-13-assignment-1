import Head from 'next/head'

export default function RedirectedPage() {
    return (
        <div className="container mx-auto px-4">
            <Head>
                <title>Redirected Page</title>
            </Head>
            <div className="container">
                This is the redirected Page
            </div>
        </div>
    )
}
