# Kellygroup Next SaaS

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Bun](https://img.shields.io/badge/Bun-Runtime-black)](https://bun.sh)
[![Next.js](https://img.shields.io/badge/Next.js-15.x.x-black)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC)](https://tailwindcss.com)

A modern SaaS application built with Next.js, featuring a neumorphic design system and internationalization support.

## 🚀 Features

- 🎨 Neumorphic Design System
- 🌐 i18n Support (English/French)
- 📱 Responsive Components
- 🌙 Dark Mode Support
- ♿ Accessibility (WCAG 2.1 AA)

## 💻 Tech Stack

- [Next.js 15.x.x](https://nextjs.org/) - React Framework
- [Bun](https://bun.sh/) - JavaScript Runtime
- [Tailwind CSS v4](https://tailwindcss.com/) - CSS Framework
- Server Components First Approach
- TypeScript for Type Safety

## 📦 Installation

```bash
# Install dependencies with bun
bun install

# Run the development server
bun dev

# Build for production
bun run build

# Start production server
bun start
```

## 🎨 CSS Architecture

This project uses Tailwind CSS v4 with a simplified configuration approach:

- No external `tailwind.config.ts` or `postcss.config.mjs` files
- All configuration is handled in `src/app/[locale]/globals.css`
- Uses `@import "tailwindcss";` for importing Tailwind
- Theme customization via `@theme` directive
- Utility classes defined in the utilities layer

## 🌐 Internationalization

The application supports multiple languages through Next.js internationalization:

- Default language: English
- Supported languages: English, French
- Language files located in `src/i18n/messages`

## 👤 Author

**Patrick Kelly**

- X (Twitter): [@AGIManifesto](https://x.com/AGIManifesto)
- GitHub: [@patgpt](https://github.com/patgpt)
- LinkedIn: [patgpt](https://linkedin.com/in/patgpt)

## 📄 License

This project is MIT licensed - see [LICENSE.md](LICENSE.md) for details

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.
