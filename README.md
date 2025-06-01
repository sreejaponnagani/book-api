# 📚 Book API - Node.js + Express Project

A simple RESTful API to manage a list of books. This project supports basic CRUD operations using Express and stores data in memory (no database required).

---

## 🚀 How to Run

1. **Install dependencies**  

2. **Start the server**  

3. **Server runs on:**  

---

## 📡 API Endpoints

| Method | Endpoint           | Description                  |
|--------|--------------------|------------------------------|
| GET    | `/books`           | Get all books                |
| POST   | `/books`           | Add a new book               |
| PUT    | `/books/:id`       | Update a book by ID          |
| DELETE | `/books/:id`       | Delete a book by ID          |

---

## 📥 Sample POST Body
```json
{
"id": "1",
"title": "The Alchemist",
"author": "Paulo Coelho"
}
