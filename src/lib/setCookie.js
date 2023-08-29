export default async function setCookie() {
    // Fetch posts from the API
    const response = await fetch(
        'http://localhost:3000/api/cookie/set'
    )
    return  response.json()


}