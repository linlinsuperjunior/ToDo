// src/components/ListSelector.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListSelector = ({ onSelectList }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios.get('/api/lists').then(response => {
      setLists(response.data);
    });
  }, []);

  return (
    <select onChange={(e) => onSelectList(e.target.value)} defaultValue="">
      <option value="" disabled>Select a list</option>
      {lists.map(list => (
        <option key={list.id} value={list.id}>{list.name}</option>
      ))}
    </select>
  );
};

export default ListSelector;
