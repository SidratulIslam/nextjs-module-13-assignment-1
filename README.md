This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


মডিউল ১৩ এর এসাইনমেন্ট
Assignment Title: Building a Cookie-Based Web App with Next.js 13


 


Assignment Description:


In this assignment, you will create a simple web application using Next.js 13 that uses cookies to store user preferences, responds with JSON data, and handles redirection and header modification. 


Assignment Requirements:


 


Setting Cookies:


 


Create a Next.js project using version 13.


Implement a route that sets a cookie when a user clicks a button. The cookie should store a user preference, e.g., "theme: dark" or "language: en".


 


Reading Cookies:


 


Implement another route that reads the user's preference cookie and displays it on the page.


 


JSON Response:


 


Create a route that returns a JSON response with the following data:


{


  "message": "Welcome to our API!",


  "version": "1.0"


}


 


Redirection:


 


Implement a route that redirects the user to a different page within your application using NextResponse.redirect().


 


Header Modification:


 


Create a route that accepts an incoming request with an "Authorization" header.


Extract the token from the header, prefix it with "Bearer ", and add it as a new "Authorization" header.


Use NextResponse.next() to produce the response. 


 


Styling: Feel free to style with any of the CSS framework


 


Submission Instruction :


please submit the respective GitHub repository link.
