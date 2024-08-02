# Yuki

A E-commerce website for selling digital products.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [tRPC](https://trpc.io/)
- [Prisma](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)
- [Lucia](https://lucia-auth.com/)
- [React Query](https://react-query.tanstack.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)

## Features

- [x] User authentication [Lucia](https://lucia-auth.com/)
  - [x] Sign up
  - [x] Sign in
  - [x] Sign out
  - [x] Forgot password
  - [x] Reset password
- [x] Upload image feature [Uploadthing](https://uploadthing.com/)
- [x] Admin dashboard
  - [x] View all categories
  - [x] Add category
  - [x] Edit category
  - [x] Delete category
  - [x] View all products
  - [x] Add product
  - [x] Edit product
  - [x] Delete product
  - [ ] View all users
  - [ ] View all orders
- [x] User dashboard
  - [x] Change password
  - [x] Change information
  - [ ] View orders
- [ ] Product page
- [ ] Search products
- [ ] Filter products
- [ ] Sort products
- [ ] Pagination
- [ ] Add to cart
- [ ] Checkout

## Getting Started

1. Clone the repository

```bash
git clone git@github.com:tiesen243/yuki.git
```

2. Install dependencies

```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install

# bun
bun install
```

3. Create a `.env` file in the root directory and add the following environment variables

```bash
DATABASE_URL=
```

4. Start the development server

```bash
# npm
npm run dev

# yarn
yarn dev

# pnpm
pnpm dev

# bun
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

## License

This project is open source and available under the [MIT License](LICENSE).
