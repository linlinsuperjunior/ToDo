

// export default TodoItem;
import React from 'react';
import axios from 'axios';

function TodoItem({ todo, setTodos }) {
  const handleDelete = () => {
    // Logic to delete the todo and update state
    setTodos(prevTodos => prevTodos.filter(t => t.id !== todo.id));
  };



const fetchLists = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/todos');
    setTodos(response.data);
  } catch (error) {
    console.error('Error fetching to-dos:', error);
  }
};

return (
  <div>
    <span>{todo.text}</span>
    <button onClick={handleDelete}>Delete</button>
  </div>
);
}

export default TodoItem;