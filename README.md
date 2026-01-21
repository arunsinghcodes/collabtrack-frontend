# 🚀 CollabTrack Frontend

Frontend application for **CollabTrack** — a Jira‑like project management system.

This project is built using modern frontend architecture with **Next.js App Router**, **Tailwind CSS v4**, and **shadcn/ui**, designed to integrate seamlessly with the CollabTrack Backend REST APIs.

---

## 📌 Project Overview

**CollabTrack** is a collaborative project and task management platform that allows teams to:

- Create and manage projects
- Assign tasks and subtasks
- Track progress across teams
- Manage roles and permissions
- Collaborate efficiently like Jira

This repository contains the **frontend application only**.

---

## 🧱 Tech Stack

| Category         | Technology               |
| ---------------- | ------------------------ |
| Framework        | Next.js 14+ (App Router) |
| Language         | JavaScript (ES6+)        |
| Styling          | Tailwind CSS v4          |
| UI Components    | shadcn/ui                |
| State Management | Zustand (client state)   |
| Server State     | TanStack React Query     |
| HTTP Client      | Axios                    |
| Routing          | Next.js App Router       |
| Authentication   | JWT (httpOnly cookies)   |
| Deployment       | Vercel (recommended)     |

---

## 📂 Folder Structure

```
collabtrack-frontend/
├── src/
│   ├── app/
│   │   ├── (auth)/            # Public routes
│   │   │   ├── login/
│   │   │   └── register/
│   │   │
│   │   ├── (dashboard)/       # Protected routes
│   │   │   ├── dashboard/
│   │   │   ├── projects/
│   │   │   ├── tasks/
│   │   │   └── layout.js
│   │   │
│   │   └── layout.js
│   │
│   ├── components/
│   │   ├── layout/            # Sidebar, Navbar
│   │   └── ui/                # shadcn components
│   │
│   ├── lib/                   # axios, utils, query client
│   ├── services/              # API services
│   ├── stores/                # Zustand stores
│   └── hooks/                 # Custom React Query hooks
│
├── public/
├── components.json            # shadcn config
├── tailwind.config.js
├── postcss.config.mjs
└── README.md
```

---

## 🌐 Backend Integration

The frontend consumes REST APIs from the CollabTrack backend.

**Backend URL:**

```
https://collabtrack-api.onrender.com
```

**Base API Path:**

```
/api/v1
```

### Example:

```
POST /api/v1/auth/login
GET  /api/v1/projects
GET  /api/v1/tasks/:projectId
```

---

## 🔐 Authentication Flow

- User logs in via backend API
- Backend sets **httpOnly JWT cookies**
- Frontend never stores tokens in localStorage
- Session is validated via `/auth/current-user`
- Protected routes handled using Next.js middleware

```
Login → Cookie Set → Middleware Check → Dashboard
```

---

## 🧠 State Management Strategy

### ✅ Server State

Handled using **TanStack React Query**:

- Projects
- Tasks
- Subtasks
- Notes
- Members

Features:

- caching
- background refetch
- retries
- pagination

---

### ✅ Client State

Handled using **Zustand**:

- authenticated user
- role
- sidebar open/close
- selected project

---

## 🎨 UI System

### Tailwind CSS v4

- utility‑first styling
- no component layer
- fast compilation

### shadcn/ui

- accessible components
- fully customizable
- Tailwind‑based
- no runtime dependency

Components used:

- Button
- Card
- Input
- Table
- Dialog
- Dropdown Menu
- Toast
- Badge

---

## 📊 Dashboard Features (Planned)

- Summary cards
- Assigned tasks
- Project overview
- Role‑based visibility

---

## 🧪 Development Setup

### 1️⃣ Install dependencies

```bash
npm install
```

---

### 2️⃣ Environment variables

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://collabtrack-api.onrender.com/api/v1
```

---

### 3️⃣ Run development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🚀 Deployment

Recommended platform:

- **Vercel** (best with Next.js)

Steps:

1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy

---

## 🔮 Future Enhancements

- Role‑based UI permissions
- Realtime updates (WebSockets)
- Drag & drop Kanban board
- File uploads
- Activity logs
- Notifications
- Dark mode

---

## 👨‍💻 Author

**Arun Kumar Singh**
Frontend Engineer | Full‑Stack Developer

---

## 📄 License

This project is for **learning and portfolio purposes**.

---

### ⭐ If you like this project, give it a star!

Happy coding 🚀
