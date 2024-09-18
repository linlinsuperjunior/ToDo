// src/components/TodoList.js
// import React from 'react';
// import TodoItem from './TodoItem';

// function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
//   return (
//     <ul>
//       {todos.map(todo => (
//         <TodoItem
//           key={todo.id}
//           todo={todo}
//           onToggle={() => onToggleTodo(todo.id)}
//           onDelete={() => onDeleteTodo(todo.id)}
//         />
//       ))}
//     </ul>
//   );
// }

// export default TodoList;

// import React from 'react';
// import TodoItem from './TodoItem';

// const TodoList = ({ todos, markAsCompleted, deleteTodo }) => (
//   <ul>
//     {todos.map(todo => (
//       <TodoItem
//         key={todo.id}
//         todo={todo}
//         markAsCompleted={markAsCompleted}
//         deleteTodo={deleteTodo}
//       />
//     ))}
//   </ul>
// );

// export default TodoList;

// src/components/ToDoList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ToDoList = ({ listId }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`/api/lists/${listId}/todos`).then(response => {
      setTodos(response.data);
    });
  }, [listId]);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default ToDoList;
