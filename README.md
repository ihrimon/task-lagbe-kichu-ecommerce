# 🛍️ Lagbe Kichu — E-commerce Assessment Project

A modern full-stack e-commerce web application built with **Next.js (App Router)** and **Express.js (TypeScript)** using the **MERN** stack architecture.

---

## 🚀 Tech Stack

### 🖥️ Frontend
- Next.js 14 (App Router)
- TypeScript
- Redux Toolkit + RTK Query
- Tailwind CSS + ShadCN UI
- React Hook Form + Zod
- Cookie-based Authentication

### ⚙️ Backend
- Express.js (TypeScript)
- MongoDB + Mongoose
- JWT Authentication (Access + Refresh)
- Zod Validation
- Modular Architecture
- Multer (for image uploads)

---

## 📁 Folder Structure

```
lagbe-kichu/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── app/
│       ├── components/
│       ├── constants/
│       ├── context/
│       ├── hooks/
│       ├── lib/
│       ├── providers/
│       ├── redux/
│       ├── schemas/
│       ├── services/
│       └── types/
│
└── backend/
    ├── uploads/
    └── src/
        ├── app/
        │   ├── config/
        │   ├── constants/
        │   ├── interface/
        │   ├── middlewares/
        │   ├── modules/
        │   ├── routes/
        │   └── utils/
        ├── app.ts
        └── server.ts
```

---

## ⚡ Getting Started

### 1️⃣ Clone Repository
```bash
git clone https://github.com/<your-username>/lagbe-kichu.git
cd lagbe-kichu
```

### 2️⃣ Setup Environment
- Duplicate `.env.example` → rename it to `.env` (for backend) and `.env.local` (for frontend)
- Fill in your environment variables

---

### 🖥️ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will start on → `http://localhost:3000`

---

### ⚙️ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend will start on → `http://localhost:5000`

---

## 🔐 Authentication Flow

- Login API returns **access** and **refresh** tokens
- Refresh token stored in **HttpOnly Cookie**
- Access token stored in **memory (Redux state)** temporarily
- Automatically refresh tokens when expired

---

## 🧠 Features

✅ User Authentication (Register/Login)  
✅ Product Management (CRUD)  
✅ Cart & Checkout System  
✅ Responsive Design with Tailwind + ShadCN  
✅ Secure Cookie-based Auth  
✅ Form validation using Zod + React Hook Form  
✅ Modular backend architecture  

---

## 🧑‍💻 Author
**Rimon — Full Stack Developer (MERN + Next.js)**  
💼 [GitHub](https://github.com/ihrimon) | 🌐 [Portfolio](https:/rimon-webfolio.vercel.app)

---

