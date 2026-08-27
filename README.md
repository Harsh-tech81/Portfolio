

# 🚀 Harsh Kumar — Full Stack Developer Portfolio

A premium, modern, and highly interactive personal portfolio website built with the **MERN stack**.  
Designed to showcase projects, skills, education, coding profiles, certifications, and achievements with sleek animations and a stunning UI.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-0ea5e9?style=for-the-badge)](https://portfolio-client-swart-phi.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/Harsh-tech81/Portfolio)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](LICENSE)

</div>

---

## 🌐 Live URL

> **🔗 [https://portfolio-client-swart-phi.vercel.app](https://portfolio-client-swart-phi.vercel.app)**


## ✨ Features

| Category | Details |
|---|---|
| 🎨 **Modern UI/UX** | Glassmorphism, animated gradients, floating elements, and a premium loading screen |
| 🌓 **Dynamic Theming** | Flawless Light & Dark mode support built for Tailwind CSS v4 |
| 🌌 **3D Backgrounds** | Interactive Three.js particles powered by React Three Fiber in the Hero section |
| 🎞️ **Fluid Animations** | Smooth scrolling, page transitions, and micro-interactions via Framer Motion |
| 📬 **Contact Form** | Fully functional backend form integrated with Node.js, Express, and Nodemailer (SMTP) |
| ⚡ **Lazy Loading** | Optimized performance using React `lazy` and `Suspense` for all sections |
| 📱 **Responsive Design** | Pixel-perfect layouts across desktop, tablet, and mobile devices |
| 🔍 **Scroll Spy Navigation** | Active section highlighting in the navbar as the user scrolls |
| 🔝 **Scroll to Top** | Floating button for seamless navigation back to the top |
| 📊 **Scroll Progress Bar** | Visual progress indicator at the top of the page |

---

## 📑 Sections

The portfolio is divided into the following interactive sections:

1. **🏠 Home (Hero)** — Animated intro with typing effect, 3D particle background, and CTA buttons
2. **👤 About** — Bio, interests, and objectives
3. **🎓 Education** — Academic history (NIT Patna B.Tech CSE, Higher Secondary, Secondary)
4. **🛠️ Skills** — Categorized skill grid (Languages, Frontend, Backend, Databases, DevOps, Cloud, AI/ML, Architecture, CS Fundamentals, Tools, Version Control)
5. **💼 Projects** — Featured project showcase with tech stacks, descriptions, and GitHub/Live links
6. **💻 Coding Profiles** — Competitive programming stats (LeetCode, Codeforces, CodeChef, GeeksforGeeks) with ratings
7. **🏆 Certifications** — Hackathon achievements, NPTEL certifications, and Google Cloud badges
8. **📧 Contact** — SMTP-powered contact form with rate limiting

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/) | Fast, modern UI framework with optimized builds |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling with custom dark mode variants |
| [Framer Motion](https://www.framer.com/motion/) | Complex animations, page transitions, and scroll-based effects |
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Drei](https://github.com/pmndrs/drei) | 3D graphics and interactive particle backgrounds |
| [React Router v7](https://reactrouter.com/) | Client-side routing and navigation |
| [React Icons](https://react-icons.github.io/react-icons/) | Extensive icon library for UI elements |
| [React Type Animation](https://www.npmjs.com/package/react-type-animation) | Typing effect in the Hero section |
| [GSAP](https://gsap.com/) | Additional animation capabilities |
| [clsx](https://www.npmjs.com/package/clsx) + [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) | Conditional class name utilities |

### Backend

| Technology | Purpose |
|---|---|
| [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/) | Server logic and API endpoints |
| [Nodemailer](https://nodemailer.com/) | Handling contact form emails via SMTP |
| [Express Rate Limit](https://www.npmjs.com/package/express-rate-limit) | Protecting the API from spam |
| [CORS](https://www.npmjs.com/package/cors) + [dotenv](https://www.npmjs.com/package/dotenv) | Security and environment variables |
| [Nodemon](https://www.npmjs.com/package/nodemon) | Development hot-reload |

---

## 📂 Project Structure

```
Portfolio/
├── client/                         # Frontend (React + Vite)
│   ├── public/                     # Static assets & project images
│   ├── src/
│   │   ├── App.jsx                 # Main app — assembles all sections
│   │   ├── main.jsx                # React entry point
│   │   ├── assets/                 # Images, fonts, and other assets
│   │   ├── components/
│   │   │   ├── common/             # Reusable shared components
│   │   │   ├── layout/             # Navbar, Footer, ScrollProgress, ScrollToTop, LoadingScreen
│   │   │   ├── three/              # HeroBackground (3D particles)
│   │   │   └── ui/                 # Card, Spotlight, and other UI primitives
│   │   ├── context/                # ThemeContext (Light/Dark mode)
│   │   ├── data/                   # ⬇️ All portfolio content (see below)
│   │   ├── hooks/                  # Custom hooks (useScrollspy, etc.)
│   │   ├── lib/                    # Utility libraries
│   │   ├── sections/               # Page sections (Hero, About, Education, Skills, Projects, etc.)
│   │   ├── styles/                 # Global styles and Tailwind config
│   │   └── utils/                  # Helper utilities
│   ├── package.json
│   └── vite.config.js
│
├── server/                         # Backend (Node.js + Express)
│   ├── server.js                   # Express app entry point
│   ├── controllers/                # Route handlers (contact form logic)
│   ├── middleware/                  # Rate limiting and other middleware
│   ├── routes/                     # API route definitions
│   ├── .env.example                # Environment variable template
│   └── package.json
│
├── .gitignore
├── LICENSE
└── README.md
```

### 📝 Data Management

All portfolio content is modular and isolated in `client/src/data/`, making it easy to update the website without touching any UI code:

| File | Content |
|---|---|
| `personalInfo.js` | Name, bio, titles, social links, contact info, resume URL |
| `skills.jsx` | Skills grouped by category (Frontend, Backend, AI/ML, Architecture, etc.) with custom icons |
| `projects.js` | Project showcase — tech stacks, descriptions, features, and GitHub/Live links |
| `certifications.js` | Hackathon achievements, certifications, and badges |
| `codingProfiles.jsx` | Competitive programming stats (LeetCode, CodeChef, Codeforces, GFG) with ratings |
| `education.js` | Academic history with grades and duration |
| `experience.js` | Work experience (currently a placeholder for future entries) |
| `navLinks.js` | Navigation menu items and section anchors |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Harsh-tech81/Portfolio.git
   cd Portfolio
   ```

2. **Install Frontend Dependencies:**
   ```bash
   cd client
   npm install
   ```

3. **Install Backend Dependencies:**
   ```bash
   cd ../server
   npm install
   ```

### ⚙️ Environment Configuration

Navigate to the `server` directory and create a `.env` file based on the example:

```bash
cd server
cp .env.example .env
```

**Configure your `.env` file for SMTP Email (Gmail Example):**

```env
PORT=5000
CLIENT_URL=http://localhost:5173
NODE_ENV=development

# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Email recipient (Where you want to receive messages)
EMAIL_TO=your_email@gmail.com
```

> [!NOTE]
> If using Gmail, you must generate an **App Password** from your [Google Account Security settings](https://myaccount.google.com/apppasswords).

---

## 💻 Development

You need to run both the frontend and backend servers concurrently.

**Terminal 1 — Frontend:**
```bash
cd client
npm run dev
```

**Terminal 2 — Backend:**
```bash
cd server
npm run dev
```

| Service | URL |
|---|---|
| Frontend | `http://localhost:5173` |
| Backend API | `http://localhost:5000` |

> API requests from the client are automatically proxied to the backend via Vite configuration.

---

## 📦 Build for Production

To create an optimized production build for the frontend:

```bash
cd client
npm run build
```

The output will be generated in the `dist/` directory, ready to be deployed to platforms like **Vercel**, **Netlify**, or your own server.

---

## 🗂️ Featured Projects

| # | Project | Tech Stack | Links |
|---|---|---|---|
| 1 | **AgentFlow-AI** — Multi-Agent AI Platform with RAG, vector search, and microservices | React, Redux, Node.js, Express, MongoDB, LangChain, LangGraph, Redis, Qdrant, Docker, AWS | [GitHub](https://github.com/Harsh-tech81/Multi-Agent-AI-Platform) |
| 2 | **Ecommerce Shopping Website** — Full-stack e-commerce with Razorpay payments and admin dashboard | React, Node.js, Express, MongoDB, Razorpay, Cloudinary | [GitHub](https://github.com/Harsh-tech81/Ecommerce-Shopping-Website) · [Live (Client)](https://splendorous-marzipan-2ace59.netlify.app) · [Live (Admin)](https://bejewelled-sunshine-44d5ba.netlify.app) |
| 3 | **NovaChat** — AI Chatbot & Image Generator with Stripe subscriptions | React, Node.js, Express, MongoDB, Gemini API, Stripe, ImageKit | [GitHub](https://github.com/Harsh-tech81/NovaChat) · [Live](https://nova-chat-rouge.vercel.app) |
| 4 | **Get Me A Chai** — Crowdfunding platform with OAuth and Razorpay donations | Next.js, React, Tailwind CSS, MongoDB, NextAuth.js, Razorpay | [GitHub](https://github.com/Harsh-tech81/Get-Me-A-Chai) |
| 5 | **Personal Portfolio** — This website! | React, Tailwind CSS, Framer Motion, Three.js, Node.js, Express | [GitHub](https://github.com/Harsh-tech81/Portfolio) |

---

## 🏆 Certifications & Achievements

- 🥇 **Semi-Finalist** — Flipkart GRiD 8.0 (Aug 2026)
- 🏅 **Hack4Delhi Hackathon** — NSUT, Delhi (Dec 2025)
- 🏅 **ByteVerse 7.0 Hackathon** — NIT Patna (Apr 2025)
- 📜 **The Joy of Computing using Python** — NPTEL (Apr 2026)
- 📜 **CODE THE UNCODED** — NIT Patna (Apr 2026)
- ☁️ **Google Cloud Study Jams Campaign 2025** — Google Cloud Community India

---

## 💻 Coding Profiles

| Platform | Username | Max Rating |
|---|---|---|
| [LeetCode](https://leetcode.com/u/Harsh_kr-123) | Harsh_kr-123 | 1649 |
| [CodeChef](https://www.codechef.com/users/harshkumar12) | harshkumar12 | 1416 |
| [Codeforces](https://codeforces.com/profile/harshkr.221104) | harshkr.221104 | 1010 |
| [GeeksforGeeks](https://www.geeksforgeeks.org/profile/harshkrrrpu) | harshkrrrpu | — |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 📬 Contact

| Channel | Link |
|---|---|
| 📧 Email | [harshkr.221104@gmail.com](mailto:harshkr.221104@gmail.com) |
| 💼 LinkedIn | [Harsh Kumar](https://www.linkedin.com/in/harsh-kumar-1ba21731a) |
| 🐙 GitHub | [Harsh-tech81](https://github.com/Harsh-tech81) |
| 🐦 Twitter | [HarshKumar55518](https://x.com/HarshKumar55518) |

---

<div align="center">

*Made with ❤️ by [Harsh Kumar](https://github.com/Harsh-tech81)*

⭐ **Star this repo if you found it useful!** ⭐

</div>
]]>
