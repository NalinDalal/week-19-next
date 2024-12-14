This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

well what did we did here:
created the frontend by introducing the page.tsx for diff routes like /signup or /signin
then introduced a api folder for backend, then had what /v1/signup/route.ts for
it's own logic

this logic was only for signup route, now let's see that
we had 2 components from NextServer-> NextRequest, NextResponse
we had a POST function which gets the request json and logs it
a/f the process, logs a message "You have been signed up"
