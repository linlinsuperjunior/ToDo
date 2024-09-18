// src/components/AddListForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddListForm = () => {
  const [listName, setListName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/lists', { name: listName }).then(() => {
      setListName('');
      window.location.reload(); // Refresh to get the new list
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        placeholder="Add a new list"
        required
      />
      <button type="submit">Add List</button>
    </form>
  );
};

export default AddListForm;
