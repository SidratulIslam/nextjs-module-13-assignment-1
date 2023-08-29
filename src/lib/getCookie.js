export default async function getCookie() {
    // Fetch posts from the API
    const response = await fetch(
        'http://localhost:3000/api/cookie/get'
    )
    return  response.json()


}