import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/Slice';

const Form = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        placeholder="Введите новую задачу..."
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="add-button">Добавить задачу</button>
    </form>
  );
};

export default Form;
