# 🚀 Harsh | Full Stack Developer Portfolio

A premium, modern, and highly interactive personal portfolio website built with the MERN stack. Designed to showcase projects, skills, coding profiles, and achievements with sleek animations and a stunning UI.

## ✨ Features

- **Modern UI/UX**: Glassmorphism, animated gradients, and floating elements.
- **Dynamic Theming**: Flawless Light & Dark mode support built for Tailwind CSS v4.
- **3D Backgrounds**: Interactive Three.js particles powered by React Three Fiber in the Hero section.
- **Fluid Animations**: Smooth scrolling, page transitions, and micro-interactions powered by Framer Motion.
- **Fully Functional Contact Form**: Backend integrated with Node.js, Express, and Nodemailer (SMTP).
- **Lazy Loaded Sections**: Optimized performance using React `lazy` and `Suspense`.
- **Responsive Design**: Pixel-perfect layouts ensuring compatibility across desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

### Frontend
- **React 19 + Vite** (Fast and optimized builds)
- **Tailwind CSS v4** (Utility-first styling with custom dark mode variants)
- **Framer Motion** (Complex animations and transitions)
- **React Three Fiber & Drei** (3D graphics and interactions)
- **React Router** (Navigation)
- **React Icons** (Extensive icon library for UI elements)

### Backend
- **Node.js + Express.js** (Server logic and API endpoints)
- **Nodemailer** (Handling contact form emails via SMTP)
- **Express Rate Limit** (Protecting the API from spam)
- **Cors & Dotenv** (Security and environment variables)

## 📂 Project Structure (Data Management)

All portfolio content is modular and isolated in the `client/src/data/` directory, making it incredibly easy to update the website without diving into the UI code:

- `personalInfo.js` — Core details (Name, bio, social links, contact info, resume).
- `skills.jsx` — Skills grouped by category (Frontend, Backend, AI/ML, Architecture, etc.) with custom icons.
- `projects.js` — Project showcase data featuring tech stacks, descriptions, and GitHub/Live links.
- `certifications.js` — Hackathon achievements and certifications.
- `codingProfiles.jsx` — Competitive programming stats (LeetCode, CodeChef, Codeforces) with real-time rating updates.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

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
*(Note: If using Gmail, you must generate an **App Password** from your Google Account Security settings).*

## 💻 Development

You need to run both the frontend and backend servers concurrently.

**Terminal 1 (Frontend):**
```bash
cd client
npm run dev
```

**Terminal 2 (Backend):**
```bash
cd server
npm run dev
```

The frontend will be available at `http://localhost:5173`. 
*(API requests from the client are automatically proxied to the backend running on `http://localhost:5000` via Vite configuration).*

## 📦 Build for Production

To create an optimized production build for the frontend:
```bash
cd client
npm run build
```
The output will be generated in the `dist/` directory, ready to be served or deployed to platforms like Vercel, Netlify, or your own server.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

---
*Made with ❤️ by [Harsh](https://github.com/Harsh-tech81)*
