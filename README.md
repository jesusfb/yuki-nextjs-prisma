# Yuki

Yuki is a full-stack e-commerce platform built with Next.js, Prisma, and tRPC. It is a modern, fast, and secure platform that allows you to create your own e-commerce store with ease. Yuki is built with the latest technologies and best practices to ensure that your store is fast, secure, and scalable.

## Tech Stack

- [Next.js](https://nextjs.org)
- [Lucia auth](https://lucia-auth.com)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [Uploadthing](https://uploadthing.com)
- [Resend](https://resend.io)

## Getting Started

First, clone the repository:

```bash
git clone git@github.com:tiesen243/yuki.git
```

Then, install the dependencies:

```bash
# Using NPM
npm install

# Using Yarn
yarn install

# Using PNPM
pnpm install

# Using Bun
bun install
```

Then, add a `.env` file:

```bash
cp .env.example .env
```

Then, run the development server:

```bash
# Using NPM
npm run db:push

# Using Yarn
yarn db:push
yarn dev

# Using PNPM
pnpm db:push
pnpm dev

# Using Bun
bun db:push
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
