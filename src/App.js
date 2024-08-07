// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('/api/todos');
    setTodos(response.data);
  };

  const addTodo = async (text) => {
    const response = await axios.post('/api/todos', { text });
    setTodos([...todos, response.data]);
  };

  const toggleTodo = async (id) => {
    const todo = todos.find(t => t.id === id);
    const updatedTodo = { ...todo, completed: !todo.completed };
    await axios.put(`/api/todos/${id}`, { completed: updatedTodo.completed });
    setTodos(todos.map(t => (t.id === id ? updatedTodo : t)));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`/api/todos/${id}`);
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTodo onAddTodo={addTodo} />
      <TodoList todos={todos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

