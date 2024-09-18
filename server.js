
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

app.use(bodyParser.json());
app.use(cors());

// In-memory store
let lists = [];
let todos = [];

// Get all lists
// app.get('/api/lists', (req, res) => {
//   res.json(lists);
// });
app.get('/api/lists', (req, res) => {
  try {
    res.json(lists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching lists' });
  }
});

// Add a new list
// app.post('/api/lists', (req, res) => {
//   const newList = { id: uuidv4(), name: req.body.name };
//   lists.push(newList);
//   res.status(201).json(newList);
// });
app.post('/api/lists', (req, res) => {
  try {
    const newList = { id: uuidv4(), name: req.body.name };
    lists.push(newList);
    res.status(201).json(newList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});
// Get todos for a specific list
// app.get('/api/lists/:id/todos', (req, res) => {
//   const listId = req.params.id;
//   const listTodos = todos.filter(todo => todo.listId === listId);
//   res.json(listTodos);
// });
app.get('/api/lists/:id/todos', (req, res) => {
  try {
    const listId = req.params.id;
    const listTodos = todos.filter(todo => todo.listId === listId);
    res.json(listTodos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching todos' });
  }
});

// Add a new todo
// app.post('/api/lists/:id/todos', (req, res) => {
//   const listId = req.params.id;
//   const newTodo = { id: uuidv4(), text: req.body.text, listId };
//   todos.push(newTodo);
//   res.status(201).json(newTodo);
// });
app.post('/api/lists/:id/todos', (req, res) => {
  try {
    const listId = req.params.id;
    const newTodo = { id: uuidv4(), text: req.body.text, listId };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while adding the todo' });
  }
});

// Start server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
