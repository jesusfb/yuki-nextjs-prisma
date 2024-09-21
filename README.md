# Yuki

A full-stack e-commerce platform built with Turborepo, Next.js, TailwindCSS, Prisma, and tRPC. It is a modern, fast, and secure platform that allows you to create your own e-commerce store with ease. Yuki is built with the latest technologies and best practices to ensure that your store is fast, secure, and scalable.

## About

This is a template for creating a new application with monorepo structure using [Turborepo](https://turborepo.org) and contains:

```text
apps
  ├─ web
  |   ├─ Next.js 14
  |   ├─ React 18
  |   ├─ Tailwind CSS
  |   └─ E2E Typesafe API Server & Client
  └─ dashboard
      ├─ Next.js 14
      ├─ React 18
      ├─ Tailwind CSS
      └─ E2E Typesafe API Server & Client
packages
  ├─ api
  |   └─ tRPC v11 router definition
  ├─ auth
  |   └─ Authentication using Lucia & Arctic
  ├─ db
  |   └─ Typesafe db calls using Prisma
  ├─ email
  |   └─ Email sending using Resend
  ├─ uploader
  |   └─ File uploading using Uploadthing
  └─ ui
      └─ Start of a UI package for the webapp using shadcn-ui
tooling
  ├─ eslint
  |   └─ shared, fine-grained, eslint presets
  ├─ prettier
  |   └─ shared prettier configuration
  ├─ tailwind
  |   └─ shared tailwind configuration
  └─ typescript
      └─ shared tsconfig you can extend from
```

## Installation

```bash
npx create-turbo@latest -e https://github.com/tiesen243/yuki
```

## Quick Start

1. Setup the project:

```bash
# Install dependencies
bun install

# Configure environment variables
cp .env.example .env
```

2. When you want to add a new UI component:

Run the ui-add script to add a new UI component using the interactive shadcn/ui CLI:

```bash
bun ui-add
```

3. When you want to add a new package:

Run the following command to add a new package:

```bash
bun turbo gen init
```

The generator sets up the package.json, tsconfig.json and a index.ts, as well as configures all the necessary configurations for tooling around your package such as formatting, linting and typechecking. When the package is created, you're ready to go build out the package.

4. To update all packages in the monorepo:

```bash
sudo chmod -x ./update-packages.sh
./update-packages.sh
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<img src="./.github/yuki.gif" alt="yuki" width="100%" />
