// src/components/TodoItem.js
import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={onToggle}
      >
        {todo.text}
      </span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
