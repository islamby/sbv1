import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const List = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <Item key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default List;
