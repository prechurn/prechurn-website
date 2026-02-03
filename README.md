# PreChurn Website

AI-powered pre-churn prevention for SaaS companies.

## Live Site

**URL**: https://prechurn.com

## Tech Stack

This project is built with:

- **Vite** - Fast build tool
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI framework
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Re-usable components

## Local Development

### Prerequisites

- Node.js 18+ (install with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or pnpm

### Setup

```sh
# Clone the repository
git clone https://github.com/prechurn/prechurn-website.git

# Navigate to the project directory
cd prechurn-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## Build for Production

```sh
# Build the project
npm run build

# Preview production build locally
npm run preview
```

## Deployment

This site is automatically deployed to Vercel when changes are pushed to the `main` branch.

**Production URL**: https://prechurn.com

## Project Structure

```
prechurn-website/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── layout/       # Header, Footer
│   │   └── sections/     # Page sections
│   ├── pages/            # Route pages
│   ├── lib/              # Utilities
│   └── main.tsx          # Entry point
├── public/               # Static assets
└── index.html           # HTML template
```

## Contributing

This is a private project. If you have access and want to contribute:

1. Create a new branch
2. Make your changes
3. Test locally with `npm run dev`
4. Push and create a pull request

## License

© 2026 PreChurn. All rights reserved.
