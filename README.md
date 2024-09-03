# Yuki

A E-commerce website for selling digital products.

## Tech Stack

- [Next.js](https://nextjs.org/) [tRPC](https://trpc.io/)
- [Prisma](https://www.prisma.io/)
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
  - [x] View all users
  - [x] Delete user
  - [ ] View all orders
- [x] User dashboard
  - [x] Change password
  - [x] Change information
  - [ ] View orders
- [x] Product page
- [x] Search products
- [x] Filter products
- [x] Sort products
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
cp .env.example .env
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

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
