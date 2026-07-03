# User Management Frontend

A modern, production-ready User Management frontend built with **React 19**, **Vite**, **React Router**, **React Query**, **Tailwind CSS v4**, **Axios**, **React Hook Form**, and **Zod**. This application consumes a RESTful backend API to perform complete CRUD operations on users.

## 🚀 Features

- Dashboard with user statistics
- View all users
- View user details
- Create new users
- Update existing users
- Delete users with confirmation modal
- Form validation using React Hook Form + Zod
- API integration using Axios
- Server state management with TanStack React Query
- Global error handling
- Toast notifications
- Responsive design
- Reusable UI components
- Production-style folder structure

---

## 🛠️ Tech Stack

### Frontend

- React 19
- Vite
- React Router DOM
- Tailwind CSS v4
- Axios
- TanStack React Query
- React Hook Form
- Zod
- Sonner
- React Icons
- ESLint

### Backend

This frontend is designed to work with a REST API built using:

- Node.js
- Express.js
- MongoDB
- Mongoose
- Zod Validation

---

## 📁 Project Structure

```text
src
├── api
├── components
│   ├── common
│   ├── dashboard
│   ├── layout
│   └── users
├── constants
├── hooks
├── layouts
├── pages
├── routes
├── schemas
├── services
├── utils
├── App.jsx
└── main.jsx
```

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/BiplobSordar/user_management_frontend.git
```

Navigate to the project

```bash
cd user_management_frontend
```

Install dependencies

```bash
npm install
```

---

## ▶️ Run the Development Server

```bash
npm run dev
```

The application will be available at

```
http://localhost:5173
```

---

## 🔗 Backend API

Configure the Axios base URL in

```
src/api/axios.js
```

Example

```javascript
baseURL: "http://localhost:5000/api/v1"
```

Make sure the backend server is running before starting the frontend.

---

## 📌 Available Features

### Dashboard

- Total Users
- Active Users
- Inactive Users

### User Management

- List Users
- View User Details
- Create User
- Edit User
- Delete User

### Forms

- React Hook Form
- Zod Validation
- Inline Validation Errors
- Loading State

### API

- Axios Instance
- Request Interceptors
- Response Interceptors
- Centralized Error Handling

### UI

- Responsive Layout
- Loading Spinner
- Empty State
- Error State
- Confirmation Modal
- Toast Notifications

---

## 📜 Available Scripts

Start development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

Run ESLint

```bash
npm run lint
```

---

## 🏗️ Architecture

```text
Pages
   │
   ▼
Custom Hooks
   │
   ▼
React Query
   │
   ▼
Service Layer
   │
   ▼
Axios Instance
   │
   ▼
REST API
```

---

## 📸 Screens

- Dashboard
- Users Table
- User Details
- Create User
- Edit User
- Delete Confirmation Modal

---

## 📈 Future Improvements

- Authentication & Authorization
- Search & Filtering
- Pagination
- Sorting
- Dark Mode
- Profile Image Upload
- Unit & Integration Tests
- Docker Support
- CI/CD Pipeline

---

## 👨‍💻 Author

**Biplob Sordar**

 - Portfolio: https://portfolio-ten-theta-97.vercel.app/

 - GitHub: https://github.com/BiplobSordar

 - LinkedIn: https://www.linkedin.com/in/biplob-sordar/
---

## 📄 License

This project is licensed under the MIT License.