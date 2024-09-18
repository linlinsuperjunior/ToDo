import axios from 'axios';



const addTodo = async (todo) => {
    try {
      const response = await axios.post('/api/todos', todo);
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding to-do:', error);
    }
  };