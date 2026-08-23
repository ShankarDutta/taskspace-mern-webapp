# ⚡ React Vite Starter Kit

A modern, production-ready **React + Vite** starter template with **Tailwind CSS v4**, **ESLint**, **Prettier**, automatic **SEO metadata generation**, and a clean project structure to help you start building immediately.

> Designed for developers who want a fast, scalable, and production-ready React project.

---

## ✨ Features

* ⚛️ React 19
* ⚡ Vite 8
* 🎨 Tailwind CSS v4
* 🧩 shadcn/ui ready
* 🎯 ESLint configuration
* 💅 Prettier + Tailwind plugin
* 🌙 Dark mode ready
* 🔍 Automatic SEO metadata generation
* 🗺️ Sitemap & robots.txt generation
* 📱 Responsive starter layout
* 🚀 Optimized production build

---

# 📦 Installation

Clone the repository:

```bash
git clone https://github.com/ShankarDutta/react-vite-starter-kit.git
```

Move into the project:

```bash
cd react-vite-starter-kit
```

Install dependencies:

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file in the project root.

```env
VITE_DOMAIN_NAME="https://your-domain.com"
```

Example:

```env
VITE_DOMAIN_NAME="http://localhost:4173"
```

> **Important:** Replace the placeholder with your actual production domain.

---

# 🚀 Development

Start the development server:

```bash
npm run dev
```

---

# 🔍 Generate SEO Files

Generate public SEO metadata (sitemap, robots, etc.):

```bash
npm run seo
```

This script runs automatically before every production build.

---

# 🏗 Production Build

Create an optimized production build:

```bash
npm run build
```

This command automatically:

1. Generates SEO metadata.
2. Builds the production bundle.

---

# 👀 Preview Production Build

After building, preview the production version locally:

```bash
npm run preview
```

---

# 🧹 Lint

Check your project for ESLint issues.

```bash
npm run lint
```

---

# ✅ Check Code Quality

Runs:

* ESLint
* Prettier format check

```bash
npm run check
```

---

# 🎨 Format Code

Automatically format the entire project.

```bash
npm run format
```

---

# 🚀 Production Check

Before deploying, run:

```bash
npm run prod
```

This command:

* Runs ESLint
* Checks formatting
* Formats the project
* Generates SEO metadata
* Creates the production build

---

# 📁 Project Structure

```text
.
├── public/
├── scripts/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   └── main.jsx
├── .env
├── .env.example
├── .gitignore
├── .prettierrc
├── package.json
├── package-lock.json
└── vite.config.js
```

---

# 🌐 Deployment

This starter works perfectly with:

* Vercel
* Netlify
* Render
* GitHub Pages (with configuration)

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

---

# 📜 Available Scripts

| Script            | Description                                               |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Start development server                                  |
| `npm run seo`     | Generate SEO metadata                                     |
| `npm run build`   | Generate SEO metadata and build the app                   |
| `npm run preview` | Preview the production build locally                      |
| `npm run lint`    | Run ESLint                                                |
| `npm run check`   | Run ESLint and Prettier checks                            |
| `npm run format`  | Format the project using Prettier                         |
| `npm run prod`    | Run checks, format code, generate SEO metadata, and build |

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

# ⭐ Support

If you find this project useful, consider giving it a ⭐ on GitHub.

It helps others discover the project and supports future improvements.

---

# 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ by **Shankar Dutta**
