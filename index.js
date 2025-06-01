const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory array to store books
let books = [
  { id: '1', title: '1984', author: 'George Orwell' },
  { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];

// GET all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
// POST a new book
app.post('/books', (req, res) => {
  const { id, title, author } = req.body;

  // Check if all fields are provided
  if (!id || !title || !author) {
    return res.status(400).json({ error: 'All fields (id, title, author) are required.' });
  }

  // Add the new book
  books.push({ id, title, author });

  res.status(201).json({ message: 'Book added successfully.' });
});
// PUT - Update a book by ID
app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;

  // Find the book by ID
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ error: 'Book not found.' });
  }

  // Update title and/or author if provided
  if (title) book.title = title;
  if (author) book.author = author;

  res.json({ message: 'Book updated successfully.', book });
});
// DELETE - Remove a book by ID
app.delete('/books/:id', (req, res) => {
  const { id } = req.params;

  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Book not found.' });
  }

  books.splice(index, 1);
  res.json({ message: 'Book deleted successfully.' });
});
