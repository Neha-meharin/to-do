# 📝 Let's Get It Done!!!

A simple full-stack Todo application built to understand how a React frontend communicates with an Express backend, Prisma, and PostgreSQL.

The project has a fun **classroom notebook-style UI** where you can add, edit, complete, and delete your todos.

## ✨ Features

* ➕ Add new todos
* ✏️ Edit existing todos
* ✅ Mark todos as completed
* ❌ Delete todos
* 💾 Store todos in PostgreSQL
* 🔄 Fetch todos from the backend
* 📓 Notebook-inspired UI
* 🗒️ Custom edit popup with a torn-paper design
* ⌨️ Press Enter to add or save
* ⎋ Press Escape to close the edit popup

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Vite
* CSS

### Backend

* Node.js
* Express
* TypeScript
* REST API
* CORS

### Database

* PostgreSQL
* Prisma ORM

## 🏗️ Project Structure

```text
to-do/
│
├── client/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   └── ...
│   └── package.json
│
└── server/
    ├── prisma/
    │   └── schema.prisma
    ├── generated/
    ├── server.ts
    └── package.json
```

## 🔄 How It Works

The application follows this flow:

```text
React Frontend
      ↓
   REST API
      ↓
Express Backend
      ↓
   Prisma ORM
      ↓
 PostgreSQL
```

For example, when a user adds a todo:

```text
User enters a todo
        ↓
React sends POST request
        ↓
Express receives the request
        ↓
Prisma creates the record
        ↓
PostgreSQL stores the todo
        ↓
Backend sends the response
        ↓
React updates the list
```

## 🔌 API Endpoints

| Method | Endpoint              | Purpose                         |
| ------ | --------------------- | ------------------------------- |
| GET    | `/todos`              | Get all todos                   |
| POST   | `/todos`              | Create a new todo               |
| PATCH  | `/todos/:id`          | Edit a todo                     |
| PATCH  | `/todos/:id/complete` | Mark a todo complete/incomplete |
| DELETE | `/todos/:id`          | Delete a todo                   |

## 🗄️ Database Model

The Todo model contains:

```text
Todo
├── id
├── title
└── completed
```

* `id` → Unique identifier for each todo
* `title` → Todo text
* `completed` → Whether the todo is completed

## 🚀 Running the Project Locally

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd to-do
```

### 2. Start the backend

```bash
cd server
npm install
```

Create a `.env` file and add your PostgreSQL connection string:

```env
DATABASE_URL="your-postgresql-connection-string"
```

Run the Prisma migration:

```bash
npx prisma migrate dev
```

Start the backend:

```bash
npx tsx server.ts
```

The backend will run on:

```text
http://localhost:5000
```

### 3. Start the frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

The frontend will run on the Vite development URL shown in the terminal.

## 🎯 What I Learned

This project helped me understand the complete flow of a full-stack application, including:

* React state management with `useState`
* Fetching data with `useEffect`
* REST API concepts
* GET, POST, PATCH and DELETE requests
* Express routes
* Express middleware
* CORS
* Request bodies and `req.body`
* Prisma ORM
* PostgreSQL database operations
* Database models and primary keys
* Connecting frontend and backend
* CRUD operations
* Basic TypeScript usage
* Git and GitHub workflow

## 📌 Future Improvements

Some features that could be added later:

* Todo categories
* Due dates
* Search and filtering
* Drag-and-drop ordering
* User authentication
* Responsive mobile improvements
* Deployment

---

<img width="1911" height="907" alt="image" src="https://github.com/user-attachments/assets/600da0df-eb06-4d04-838d-4bda7aac80b5" />
<img width="1908" height="897" alt="image" src="https://github.com/user-attachments/assets/ee739eee-696f-4008-a8e1-ed02a20a8d81" />


### Built with ❤️ while learning full-stack development.
