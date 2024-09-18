// src/components/AddToDoForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddToDoForm = ({ listId }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/lists/${listId}/todos`, { text: todoText }).then(() => {
      setTodoText('');
      window.location.reload(); // Refresh to get the new to-do
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new to-do"
        required
      />
      <button type="submit">Add To-Do</button>
    </form>
  );
};

export default AddToDoForm;
