import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoApp = () => {
  const [lists, setLists] = useState([]);  // State to store the list of to-do lists
  const [newListName, setNewListName] = useState('');  // State to store the input for a new list

  // Fetch the lists from the server when the component is mounted
  useEffect(() => {
    fetchLists();
  }, []);

  // Function to fetch all lists from the server
  const fetchLists = () => {
    axios.get('/api/lists')
      .then((response) => {
        setLists(response.data);  // Update the state with the fetched lists
      })
      .catch((error) => {
        console.error('Error fetching lists:', error);
      });
  };

  // Function to handle the form submission for adding a new list
  const handleAddList = (e) => {
    e.preventDefault();  // Prevent form submission default behavior

    axios.post('/api/lists', { name: newListName })  // Send the new list to the server
      .then((response) => {
        setLists([...lists, response.data]);  // Update the list state directly with the new list
        setNewListName('');  // Clear the input field
      })
      .catch((error) => {
        console.error('Error adding list:', error);
      });
  };

  return (
    <div>
      <h2>Select a List</h2>
      <ul>
        {lists.map((list) => (
          <li key={list.id}>{list.name}</li>  // Display each list in the "Select a List" section
        ))}
      </ul>

      <h3>Add a New List</h3>
      <form onSubmit={handleAddList}>
        <input
          type="text"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}  // Update the state as the user types
          placeholder="Enter list name"
          required
        />
        <button type="submit">Add List</button>
      </form>
    </div>
  );
};

export default TodoApp;
