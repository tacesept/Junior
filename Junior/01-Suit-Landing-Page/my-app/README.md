# Business Landing Page

A modern, responsive business landing page built with Next.js 15, React 19, and Tailwind CSS. This project showcases a company's marketing automation services with a clean, professional design.

## 🚀 Features

- **Modern Design**: Clean and professional UI with gradient backgrounds and custom styling
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Next.js 15**: Built with the latest Next.js App Router for optimal performance
- **TypeScript**: Fully typed codebase for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **React Icons**: Beautiful icons for enhanced user experience
- **SEO Optimized**: Built-in SEO optimization with Next.js

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.17 or later)
- **npm** or **yarn** or **pnpm** package manager
- **Git** (for cloning the repository)

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone [your-repository-url]
cd my-app
```

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Using yarn:

```bash
yarn install
```

Using pnpm:

```bash
pnpm install
```

### 3. Start the Development Server

Using npm:

```bash
npm run dev
```

Using yarn:

```bash
yarn dev
```

Using pnpm:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📦 Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with hot reloading.

### `npm run build`

Builds the app for production to the `.next` folder.

### `npm run start`

Runs the built app in production mode.

### `npm run lint`

Runs ESLint to check for code quality and potential issues.

## 🏗️ Project Structure

```
my-app/
├── app/
│   ├── ui/                 # Reusable UI components
│   │   ├── header.tsx      # Header component
│   │   └── footer.tsx      # Footer component
│   ├── fonts/              # Custom fonts
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page component
├── public/
│   └── assets/             # Static assets (images, SVGs)
├── package.json            # Project dependencies and scripts
├── next.config.ts          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Customization

### Styling

- The project uses **Tailwind CSS** for styling
- Global styles are defined in `app/globals.css`
- Custom components are located in the `app/ui/` directory

### Content

- Main content is in `app/page.tsx`
- Update the text, images, and call-to-action buttons to match your business needs
- Replace images in the `public/assets/` directory with your own

### Components

- Header: Located in `app/ui/header.tsx`
- Footer: Located in `app/ui/footer.tsx`
- Main content sections are in `app/page.tsx`

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Import your project on Vercel
3. Deploy with zero configuration

### Other Platforms

This Next.js application can be deployed on:

- **Netlify**
- **Railway**
- **Heroku**
- **AWS**
- **Google Cloud Platform**
- Any platform that supports Node.js

## 🔧 Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Icons** - Popular icon library for React
- **ESLint** - JavaScript linting utility 
---

Built with ❤️ using Next.js and React
