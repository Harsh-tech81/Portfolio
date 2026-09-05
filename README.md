

# 🚀 Harsh Kumar — Full Stack Developer Portfolio

A premium, modern, and highly interactive personal portfolio website built with the **MERN stack**.  
Designed to showcase projects, skills, education, coding profiles, certifications, and achievements with **60+ custom animations**, 3D elements, and a stunning UI.

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
| 🌌 **3D & Interactive** | Three.js particles + Spline 3D robot in Hero, custom cursor with spring physics |
| 🎞️ **60+ Animations** | Blur-in reveals, clip-path wipes, rotating gradient borders, spring physics, staggered entrances, animated counters, floating labels, SVG draw animations, and more |
| 🧲 **Micro-Interactions** | Magnetic buttons, 3D tilt cards, icon rotation on hover, pulse glow effects, heartbeat animations |
| 📬 **Contact Form** | Floating label inputs, glowing focus states, animated SVG checkmark on success, SMTP backend |
| ⚡ **Performance** | Lazy loading via React `Suspense`, viewport-gated Spline, CSS `will-change`, GPU-friendly transforms |
| 📱 **Responsive Design** | Pixel-perfect layouts across desktop, tablet, and mobile with mobile-specific fallbacks |
| 🔍 **Scroll Spy Navigation** | Active section highlighting in the navbar as the user scrolls |
| 🔝 **Scroll to Top** | Floating button with gradient glow for seamless navigation |
| 📊 **Scroll Progress Bar** | Spring-physics progress indicator at the top of the page |
| ♿ **Accessibility** | Full `prefers-reduced-motion` support — all animations gracefully disabled |

---

## 📑 Sections

The portfolio is divided into the following interactive sections:

1. **🏠 Home (Hero)** — Letter-by-letter name reveal, shimmer gradient text, typing effect, 3D Spline robot (desktop) / profile image fallback (mobile), Three.js particle background, scroll parallax, magnetic CTA buttons
2. **👤 About** — 3D tilt profile image, spring bounce-in icons, pulse-glow info cards, staggered interest tags with blur reveal
3. **🎓 Education** — Scroll-drawing timeline with gradient progress line, pulsing glow dot tracker, spring-animated graduation cap icons, hover-lift cards
4. **🛠️ Skills** — Animated `layoutId` category tabs, blur-to-clear card transitions, 360° icon rotation on hover, pulse-glow cards, infinite skill marquee with pause-on-hover
5. **💼 Projects** — Rotating conic-gradient borders on featured images, staggered feature list reveals, 3D tilt + shine-sweep on images, tech stack icon grid with hover effects
6. **💻 Coding Profiles** — Animated number counters (count up from 0), platform-colored glow rings, spring-animated visit buttons with colored box shadows
7. **🏆 Certifications** — Clip-path left-to-right image reveal, glassmorphism Quick View overlay on hover, hover-lift with spring physics
8. **📧 Contact** — Floating label inputs, glowing focus ring, animated SVG checkmark draw on success, drifting gradient orb backgrounds

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/) | Fast, modern UI framework with optimized builds |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling with custom dark mode variants |
| [Framer Motion / Motion](https://motion.dev/) | 60+ animations — scroll-triggered reveals, spring physics, staggered entrances, layout animations |
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Drei](https://github.com/pmndrs/drei) | 3D instanced particles with mouse parallax in Hero |
| [Spline](https://spline.design/) | Interactive 3D robot model in Hero (lazy-loaded, viewport-gated) |
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

## 🎬 Animation System

The portfolio uses a layered animation architecture for maximum visual impact while maintaining 60fps performance:

| Layer | Technology | Examples |
|---|---|---|
| **CSS Keyframes** | Vanilla CSS | Shimmer text, floating elements, heartbeat, gradient rotation, mouse scroll indicator, marquee |
| **Motion Variants** | Framer Motion | `fadeInUp`, `blurIn`, `rotateIn`, `clipRevealLeft`, `slideInWithBounce`, `scaleIn` |
| **Scroll-Linked** | `useScroll` + `useTransform` | Hero parallax, education timeline progress, scroll progress bar |
| **Spring Physics** | `useSpring` + `useMotionValue` | Custom cursor, magnetic buttons, 3D tilt cards, scroll-to-top |
| **Interactive** | `whileHover` / `whileTap` | Icon 360° rotation, card lift, button scale, social link bounce |
| **Viewport-Gated** | `whileInView` + `IntersectionObserver` | Section reveals, animated counters, gradient underlines, clip-path wipes |
| **Layout Animations** | `layoutId` + `AnimatePresence` | Skill tab slider, form status messages |
| **3D / WebGL** | Three.js + Spline | Particle system with mouse tracking, interactive 3D robot model |

### Custom Animation Utilities (`utils/animations.js`)

| Variant | Effect |
|---|---|
| `fadeInUp` / `fadeInDown` | Vertical slide + fade |
| `blurIn` | Blur-to-clear with vertical slide |
| `rotateIn` | Rotation + scale spring entry |
| `clipRevealLeft` | Left-to-right clip-path wipe |
| `slideInWithBounce` | Horizontal slide with spring overshoot |
| `staggerContainer` / `staggerContainerFast` | Parent container for staggered children |
| `countUp()` | Animated number counter with ease-out cubic |

### Custom CSS Animations (`styles/index.css`)

| Class | Effect |
|---|---|
| `.text-shimmer` | Animated gradient text |
| `.shine-sweep` | Diagonal light sweep on hover |
| `.animated-border` | Rotating conic-gradient border |
| `.section-underline` | Gradient underline that draws on scroll |
| `.hover-pulse-glow` | Soft pulsing indigo glow on hover |
| `.heartbeat` | Continuous heartbeat animation |
| `.input-focus-glow` | Glowing blue ring on form focus |
| `.float-label` | CSS-only floating label system |
| `.draw-check-path` | SVG checkmark stroke animation |

> All animations respect `prefers-reduced-motion` and are disabled for users who prefer reduced motion.

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
│   │   │   ├── common/             # AnimatedSection, Button, Card, SectionHeading
│   │   │   ├── layout/             # Navbar, Footer, ScrollProgress, ScrollToTop, LoadingScreen, CustomCursor
│   │   │   ├── three/              # HeroBackground (3D instanced particles)
│   │   │   └── ui/                 # Tilt, Magnetic, Marquee, Spotlight, AnimatedText, Spline wrapper
│   │   ├── context/                # ThemeContext (Light/Dark mode)
│   │   ├── data/                   # ⬇️ All portfolio content (see below)
│   │   ├── hooks/                  # useScrollspy, useIsMobile, useMediaQuery
│   │   ├── lib/                    # Utility libraries
│   │   ├── sections/               # Hero, About, Education, Skills, Projects, CodingProfiles, Certifications, Contact
│   │   ├── styles/                 # Global styles, CSS animations, Tailwind config
│   │   └── utils/                  # Animation variants & countUp utility
│   ├── package.json
│   └── vite.config.js
│
├── server/                         # Backend (Node.js + Express)
│   ├── server.js                   # Express app entry point
│   ├── controllers/                # Route handlers (contact form logic)
│   ├── middleware/                  # Rate limiting and error handling
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
| [LeetCode](https://leetcode.com/u/Harsh_kr-123) | Harsh_kr-123 | 1656 |
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
