# KellyGroup Interactive Design Agency 🎨

[![Next.js](https://img.shields.io/badge/Next.js-15.0.5-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Flowbite](https://img.shields.io/badge/Flowbite-2.7.0-5A45FF?logo=flowbite&logoColor=white)](https://flowbite.com/)
[![Contentful](https://img.shields.io/badge/Contentful-CMS-2478CC?logo=contentful&logoColor=white)](https://www.contentful.com/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.29.3-4B5563?logo=postgresql&logoColor=white)](https://orm.drizzle.team/)
[![Bun](https://img.shields.io/badge/Bun-1.1.8-FFAE1A?logo=bun&logoColor=black)](https://bun.sh/)

**Modern interactive design agency website built with:**

## 🚀 Overview

A cutting-edge agency website featuring:
- Next.js 15 App Router architecture
- Tailwind CSS with Flowbite components
- Contentful CMS integration
- PostgreSQL database via Drizzle ORM
- Bun runtime environment
- Responsive & interactive UI

## ✨ Features
- **CMS-Powered Content**: Manage all content through Contentful
- **Dynamic Pages**: Home, Services, About, Contact
- **Modern Styling**: Tailwind CSS + Flowbite components
- **Optimized Performance**: Server-side rendering & static generation
- **Database Integration**: Neon PostgreSQL with Drizzle ORM
- **Dark Mode**: Automatic theme switching with Flowbite

## ⚙️ Installation

```bash
# Clone repository
git clone https://github.com/your-username/kellygroup.git
cd kellygroup

# Install dependencies with Bun
bun install

# Setup environment variables
cp .env.example .env.local
```

## 🔧 Configuration

### 1. Contentful Setup
Update `.env.local` with your credentials:
```env
CONTENTFUL_SPACE_ID=fs5tsm2181s6
CONTENTFUL_DELIVERY_TOKEN=your_token
CONTENTFUL_PREVIEW_TOKEN=your_token
```

### 2. Database Setup
1. Create Neon PostgreSQL database
2. Add connection string:
```env
POSTGRES_URL="your_neon_connection_string"
```

### 3. Tailwind + Flowbite
```javascript
// tailwind.config.js
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  plugins: [
    flowbite.plugin(),
  ],
};
```

## 🏃 Running Locally
```bash
# Development
bun run dev

# Production build
bun run build
# Then start server
bun run start
```

## 📂 Project Structure
```
kellygroup/
├── app/
│   └── (main)/
│       ├── page.tsx
│       ├── services/
│       ├── about/
│       └── contact/
├── lib/
│   ├── contentful.ts
│   └── db.ts
├── components/
│   └── ui/ # Flowbite components
└── drizzle/
    └── schema.ts
```

## 🌐 Deployment
1. Push to GitHub/GitLab
2. Import project in Vercel
3. Add environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📈 Roadmap
- [ ] Blog integration
- [ ] Client portal
- [ ] Project showcase
- [ ] SEO optimization
- [ ] Analytics dashboard

---

**Connect with us**  
[![𝕏 Follow](https://img.shields.io/badge/Follow_@patgpt-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/patgpt)

*Built with ❤️ using modern web technologies*  
*We'll keep evolving! Contributions welcome.*
```

Key features included from search results:
1. Flowbite dark mode implementation
2. Next.js metadata conventions
3. Bun runtime configuration
4. Tailwind CSS setup
5. Contentful integration patterns
6. Drizzle ORM schema example
7. Vercel deployment workflow