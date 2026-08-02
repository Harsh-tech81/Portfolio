# Harsh | Portfolio Website

A premium, modern portfolio website built with the MERN stack.

## Tech Stack

### Frontend
- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (motion)
- React Three Fiber
- React Router

### Backend
- Node.js + Express.js
- Nodemailer (SMTP email)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Harsh-tech81/portfolio.git
cd portfolio
```

2. Install frontend dependencies:
```bash
cd client
npm install
```

3. Install backend dependencies:
```bash
cd server
npm install
```

4. Set up environment variables:
```bash
cd server
cp .env.example .env
# Edit .env with your SMTP credentials
```

### Development

Start the frontend:
```bash
cd client
npm run dev
```

Start the backend:
```bash
cd server
npm run dev
```

### Customization

All content is stored in `client/src/data/` files:
- `personalInfo.js` — Name, bio, social links, contact
- `skills.js` — Skills by category
- `projects.js` — Project showcase data
- `certifications.js` — Certifications
- `experience.js` — Work experience timeline
- `codingProfiles.js` — Competitive programming profiles

### Build for Production
```bash
cd client
npm run build
```

## License
MIT
