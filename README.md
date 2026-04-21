# 📚 Student Management REST API with JWT Authentication

## 🧪 Experiment

Develop an Express web application that interacts with a REST API to perform CRUD operations on student data. Secure the endpoints using JWT authentication and test using Postman.

---

## 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT (JSON Web Token)
* bcryptjs
* dotenv
* Postman

---

## 📁 Project Structure

```
student-api/
│
├── models/
│   ├── Student.js
│   └── User.js
│
├── routes/
│   ├── studentRoutes.js
│   └── authRoutes.js
│
├── middleware/
│   └── authMiddleware.js
│
├── .env
├── server.js
├── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```
git clone <your-repo-link>
cd student-api
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Setup MongoDB Atlas

* Create account on MongoDB Atlas
* Create a cluster
* Create database user
* Allow network access (0.0.0.0/0)
* Copy connection string

---

### 4️⃣ Configure Environment Variables

Create a `.env` file in root folder:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/studentDB?retryWrites=true&w=majority
JWT_SECRET=your_secret_key
```

---

### 5️⃣ Run the Server

```
npx nodemon server.js
```

Expected Output:

```
Server running on port 3000
MongoDB Connected ✅
```

---

## 🔐 Authentication Flow

1. Register user
2. Login user → receive JWT token
3. Use token to access protected routes

---

## 🧪 API Testing using Postman

---

### 🔹 1. Register User

**POST** `/api/auth/register`

Body:

```json
{
  "username": "navya",
  "password": "1234"
}
```

Response:

```json
{
  "msg": "User registered"
}
```

---

### 🔹 2. Login User

**POST** `/api/auth/login`

Response:

```json
{
  "token": "your_jwt_token"
}
```

---

### 🔹 3. Create Student (Protected)

**POST** `/api/students`

Headers:

```
Authorization: Bearer <token>
```

Body:

```json
{
  "name": "Navya",
  "age": 20,
  "course": "CSE"
}
```

Response:

```json
{
  "_id": "...",
  "name": "Navya",
  "age": 20,
  "course": "CSE"
}
```

---

### 🔹 4. Get All Students

**GET** `/api/students`

Response:

```json
[
  {
    "_id": "...",
    "name": "Navya",
    "age": 20,
    "course": "CSE"
  }
]
```

---

### 🔹 5. Update Student

**PUT** `/api/students/:id`

Body:

```json
{
  "name": "Navya Updated"
}
```

---

### 🔹 6. Delete Student

**DELETE** `/api/students/:id`

Response:

```json
{
  "msg": "Deleted"
}
```

---

## ❌ Unauthorized Access

Without token:

```json
{
  "msg": "No token"
}
```

---

## 🔒 JWT Middleware Logic

* Token extracted from Authorization header
* Verified using JWT secret
* Access granted only if valid

---

## 🎯 Result

The application successfully performs CRUD operations on student data using REST API. JWT authentication is implemented to secure endpoints, ensuring only authorized users can access the system.

---

## 💡 Notes

* Always include `Bearer` before token
* Restart server after `.env` changes
* Ensure MongoDB cluster is running

---

## 🏁 Conclusion

A secure backend application was developed using Express.js and MongoDB, implementing RESTful services and JWT-based authentication. All endpoints were tested successfully using Postman.

---
