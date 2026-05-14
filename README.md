# Shortly — Smart URL Shortener

A modern full-stack URL shortener application built with React, Node.js, PostgreSQL, Redis, and JWT authentication.

## Live Demo

### Frontend

[https://url-shortener-frontend-ashen-xi.vercel.app/](https://url-shortener-frontend-ashen-xi.vercel.app/)

### Backend API Docs

[https://url-shortener-api-5gn9.onrender.com/api-docs](https://url-shortener-api-5gn9.onrender.com/api-docs)

---

# Features

* User authentication (JWT)
* Protected dashboard routes
* Create short URLs
* Custom short codes
* URL analytics dashboard
* QR code generation
* Copy-to-clipboard support
* Delete URLs
* Search and filter URLs
* Responsive dashboard UI
* Interactive analytics charts
* Glassmorphism modern design
* Skeleton loading states

---

# Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* React Router
* Axios
* Framer Motion
* Recharts
* React Hot Toast

## Backend

* Node.js
* Express.js
* PostgreSQL
* Redis
* JWT Authentication
* Swagger API Documentation

## Deployment

* Frontend: Vercel
* Backend: Render
* Database: Neon PostgreSQL
* Redis: Upstash Redis

---

# Screenshots

## Landing Page

(Add screenshot here)

## Dashboard

(Add screenshot here)

## Analytics

(Add screenshot here)

---

# Installation

## Frontend

```bash
git clone https://github.com/DevikaPrasanth/url-shortener-frontend.git

cd url-shortener-frontend

npm install

npm run dev
```

Create `.env`

```env
VITE_API_URL=YOUR_BACKEND_API_URL
```

---

## Backend

```bash
git clone https://github.com/DevikaPrasanth/url-shortener-api.git

cd url-shortener-api

npm install

npm run dev
```

Create `.env`

```env
PORT=5000

DATABASE_URL=YOUR_POSTGRES_URL

JWT_SECRET=YOUR_SECRET

REDIS_URL=YOUR_REDIS_URL
```

---

# Project Structure

## Frontend

```txt
src/
 ├── api/
 ├── components/
 ├── pages/
 ├── routes/
 ├── assets/
 └── styles/
```

## Backend

```txt
src/
 ├── controllers/
 ├── routes/
 ├── middleware/
 ├── config/
 ├── utils/
 └── db/
```

---

# Key Functionalities

## Authentication

Secure JWT-based authentication with protected frontend routes.

## URL Management

Users can create, search, copy, and delete shortened URLs.

## Analytics

Interactive dashboard with click tracking and charts.

## QR Generation

Generate QR codes for each shortened URL.

## Responsive UI

Optimized for desktop and mobile devices.

---

# Future Improvements

* Edit URLs
* Advanced analytics
* Dark/light theme toggle
* Click history timeline
* Team collaboration
* Expiring links

---

# Author

Devika Prasanth

GitHub:
[https://github.com/DevikaPrasanth](https://github.com/DevikaPrasanth)
