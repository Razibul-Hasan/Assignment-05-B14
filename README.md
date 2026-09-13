<div align="center">

# DevStack

**Build your ideal development stack.**

Explore frontend, backend, database, and tooling options, compare them side by side, and assemble the stack that fits your next project.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://programing-hero-b14-05.netlify.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 🔗 Live Site

**https://programing-hero-b14-05.netlify.app/**

---

## 📖 Overview

DevStack is a single-page React application where users browse a curated catalog of technologies and build a personal stack. Each technology card shows its category, difficulty level, rating, and a badge. Selected technologies appear in a live "Your Stack" panel where they can be removed individually or all at once, with toast notifications confirming every action.

This project was built as **Assignment 05** for the Programming Hero Web Development course (Batch 14).

---

## ✨ Features

- **Technology catalog** — Browse a grid of technologies loaded from a JSON data source.
- **Add to stack** — Add any technology to your stack with a single click; the button locks to prevent duplicates.
- **Live stack panel** — See the count and list of selected technologies update instantly.
- **Remove / Remove all** — Drop a single technology or clear the entire stack.
- **Toast notifications** — Success and error feedback for every add, remove, and duplicate attempt.
- **Async data loading** — Uses React 19's `use()` hook with `Suspense` for data fetching.
- **Fully responsive** — Works across mobile, tablet, and desktop with a mobile-friendly navbar.
- **Type-safe** — Written in TypeScript with a shared `Technology` interface.

---

## 🛠️ Tech Stack

| Category        | Technology                                                                      |
| --------------- | ------------------------------------------------------------------------------- |
| Framework       | [React 19](https://react.dev/)                                                  |
| Language        | [TypeScript](https://www.typescriptlang.org/)                                   |
| Build Tool      | [Vite](https://vite.dev/)                                                       |
| Styling         | [Tailwind CSS v4](https://tailwindcss.com/) + [daisyUI](https://daisyui.com/)   |
| Icons           | [React Icons](https://react-icons.github.io/react-icons/)                       |
| Notifications   | [React Toastify](https://fkhadra.github.io/react-toastify/)                     |
| Linting         | [ESLint](https://eslint.org/) + [typescript-eslint](https://typescript-eslint.io/) |
| Deployment      | [Netlify](https://www.netlify.com/)                                             |

---

## 📁 Project Structure

```
B14-A05-DevStack/
├── public/
│   ├── data/
│   │   └── technologies.json      # Technology catalog data
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/                    # Images (banner, logo, favicon)
│   ├── components/
│   │   ├── Footer/
│   │   │   └── footer.tsx
│   │   ├── Hero/
│   │   │   └── Hero.tsx
│   │   ├── Navbar/
│   │   │   └── Navbar.tsx
│   │   └── Technologies/
│   │       ├── Technologies.tsx   # Fetches data, owns stack state
│   │       ├── TechnologyCard.tsx # Single technology card
│   │       └── StackCard.tsx      # "Your Stack" side panel
│   ├── type/
│   │   └── technology.ts          # Technology interface
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── style.css
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Razibul-Hasan/Assignment-05-B14.git

# 2. Move into the project directory
cd Assignment-05-B14

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start the Vite development server with HMR       |
| `npm run build`   | Type-check and build for production into `dist/` |
| `npm run preview` | Preview the production build locally             |
| `npm run lint`    | Run ESLint across the project                    |

---

## 🧩 Data Model

Each technology in `public/data/technologies.json` follows this shape:

```ts
interface Technology {
  id: string;
  name: string;
  category: string;     // e.g. "Frontend", "Backend", "Database"
  description: string;
  icon: string;         // URL to the technology's logo
  rating: number;       // e.g. 4.9
  difficulty: string;   // e.g. "Beginner-Friendly"
  badge: string;        // e.g. "Popular"
}
```

---

## 🌐 Deployment

The project is deployed on **Netlify**. To build for production:

```bash
npm run build
```

The output in `dist/` can be deployed to any static host.

---

## 👤 Author

**Razibul Hasan**

- GitHub: [@Razibul-Hasan](https://github.com/Razibul-Hasan)

---

## 📄 License

This project was created for educational purposes as part of the Programming Hero Web Development course.
