# Weida Hu - Personal Website

Modern personal website built with Next.js, Tailwind CSS, and shadcn/ui.

## Technology Stack

- **Next.js 16** - React framework for production
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **Lucide React** - Icon library

## Development

### Prerequisites

- Node.js 20+
- npm

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Building

```bash
# Build for production
npm run build

# The static files will be in the `out` directory
```

## Deployment

This site is configured for GitHub Pages deployment. The `next.config.ts` is set to:

```ts
output: "export"
```

To deploy to GitHub Pages:

1. Push changes to the `master` branch
2. Configure GitHub Pages to use the `out` directory
3. Site will be deployed to `https://weidahu.github.io`

## Content

- **Home** - Introduction, education, and current position
- **Research** - Research areas and projects
- **Publications** - Link to ADS library
- **CV** - Downloadable CV
- **Activities** - Personal interests and hobbies

## Adding Your CV

Place your CV PDF file at:
```
public/files/cv.pdf
```

## Customization

### Site Metadata

Edit `src/app/layout.tsx` to change:
- Site title and description
- Navigation items
- Footer content

### Styling

- Edit `src/app/globals.css` for global styles
- Components are in `src/components/ui/`
- Pages are in `src/app/`

### Colors

The site uses shadcn/ui's default color scheme. To customize:
- Edit CSS variables in `src/app/globals.css`
- Or use the shadcn CLI to add themes

## License

MIT
