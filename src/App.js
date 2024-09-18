
import React, { useState, useEffect } from 'react';
import ListSelector from './components/ListSelector';
import AddListForm from './components/AddListForm';
import ToDoList from './components/TodoList';
import AddToDoForm from './components/AddToDoForm';
import axios from 'axios';

const App = () => {
  const [selectedList, setSelectedList] = useState(null);

  const handleSelectList = (listId) => {
    setSelectedList(listId);
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <ListSelector onSelectList={handleSelectList} />
      <AddListForm />
      {selectedList && (
        <>
          <ToDoList listId={selectedList} />
          <AddToDoForm listId={selectedList} />
        </>
      )}
    </div>
  );
};

export default App;
