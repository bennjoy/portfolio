# Worra Design Studio Portfolio

A minimalist, modern portfolio website for the "worra" design studio built with Next.js.

## Design Specifications

- **Background Color:** `#6320EE` (Deep Purple)
- **Text Color:** `#FFFFFF` (Pure White)
- **Font:** Inter (responsive system stack)
- **Style:** Minimalist and modern
- **Focus:** Clean, simple homepage with essential navigation

## Features

- ✨ Minimalist design with purple background and white text
- 🎨 Custom styling with Tailwind CSS
- 📱 Responsive design for all screen sizes
- ⚡ Built with Next.js 15 for optimal performance
- 🔧 TypeScript for type safety
- ✅ ESLint configured for code quality

## Project Structure

```
portfolio/
├── src/
│   └── app/
│       ├── page.tsx          # Homepage component
│       ├── layout.tsx        # Root layout
│       └── globals.css       # Global styles
├── public/                   # Static assets
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── next.config.mjs          # Next.js configuration
└── .eslintrc.json          # ESLint configuration
```

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Check code quality:

```bash
npm run lint
```

## Customization

### Logo

Replace the placeholder logo in `src/app/page.tsx`:
- The current logo placeholder is a simple bordered box with "LOGO" text
- Replace the logo section with your SVG or image component

### Colors

To modify the color scheme, update the CSS variables in `src/app/globals.css`:

```css
:root {
  --background: #6320EE;    /* Change background color */
  --foreground: #FFFFFF;    /* Change text color */
}
```

### Typography

Font configuration is in `src/app/globals.css`. Currently using Inter from Google Fonts.

### Navigation

Modify the navigation links in `src/app/page.tsx` in the `<nav>` section.

## Technologies Used

- **Next.js 15.5.6** - React framework for production
- **React 18** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code quality tool

## Browser Support

This portfolio supports all modern browsers (Chrome, Firefox, Safari, Edge) and is optimized for mobile devices.

## Next Steps

1. Replace the placeholder logo with your SVG
2. Add portfolio content sections (Work, About, Contact)
3. Implement portfolio project showcase
4. Add contact form or links
5. Deploy to Vercel or your preferred hosting

## License

MIT License - feel free to use this as a starting point for your own portfolio.
