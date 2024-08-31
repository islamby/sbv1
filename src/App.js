import React from 'react';
import Form from './components/Form';
import List from './components/List';
import './index.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Список задач</h1>
      <Form />
      <List />
    </div>
  );
};

export default App;
