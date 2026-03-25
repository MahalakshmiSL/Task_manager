# 🚀 Collaborative Task Manager

A full-stack web application that allows managers to assign tasks to users and track progress with role-based access control.

---

## 📌 Features

### 🔐 Authentication

* User Signup & Login using JWT
* Secure password hashing with bcrypt
* Session management using tokens

---

### 👨‍💼 Manager Features

* Create tasks
* Assign tasks to users
* Edit tasks
* Delete tasks
* View all tasks created by them

---

### 👤 User Features

* View assigned tasks
* Mark tasks as completed

---

### 📋 Task Management

* CRUD operations (Create, Read, Update, Delete)
* Task status tracking (Pending / Completed)

---

### 📝 Activity Logs

* Logs every task action:

  * Task Created
  * Task Updated
  * Task Deleted
  * Task Completed

---

### 🌙 UI Features

* Responsive design using Tailwind CSS
* Dark mode toggle
* Clean and modern dashboard UI

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

### Authentication

* JSON Web Token (JWT)
* bcryptjs

---

## 📁 Project Structure

### Frontend

```
src/
├── components/
├── context/
├── pages/
├── services/
├── App.jsx
├── main.jsx
```

### Backend

```
backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── server.js
```

---

## ⚙️ Installation & Setup

### 🔹 1. Clone Repository

```
git clone <your-repo-link>
cd task-manager
```

---

### 🔹 2. Backend Setup

```
cd task-manager-backend
npm install
npm run dev
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 🔹 3. Frontend Setup

```
cd task-manager-frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

### Auth

* `POST /api/auth/signup`
* `POST /api/auth/login`

### Tasks

* `GET /api/tasks`
* `POST /api/tasks` (Manager only)
* `PUT /api/tasks/:id` (Manager only)
* `DELETE /api/tasks/:id` (Manager only)
* `PATCH /api/tasks/:id/status`

### Logs

* `GET /api/logs`

---

## 🔒 Role-Based Access Control

| Role    | Permissions                        |
| ------- | ---------------------------------- |
| Manager | Create, assign, edit, delete tasks |
| User    | View and update assigned tasks     |

---

## 🎯 Future Enhancements

* Real-time updates using Socket.io
* Drag-and-drop task board (Kanban)
* Pagination for large datasets
* Notifications system

---

## 👩‍💻 Author

Mahalakshmi S L
Information Science Student

---

## ⭐ Conclusion

This project demonstrates a complete full-stack application with authentication, role-based access, and real-world task management features.
