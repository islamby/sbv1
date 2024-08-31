import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskImportance, updateTaskText } from '../features/Slice';

const Item = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskText, setNewTaskText] = useState(task.text);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggleImportance = () => {
    dispatch(toggleTaskImportance(task.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newTaskText.trim()) {
      dispatch(updateTaskText({ id: task.id, newText: newTaskText }));
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setNewTaskText(task.text);
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.isImportant ? 'important' : ''}`}>
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={newTaskText}
            onChange={e => setNewTaskText(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleSave} className="save-button">Сохранить</button>
          <button onClick={handleCancel} className="cancel-button">Отмена</button>
        </div>
      ) : (
        <div className="view-mode">
          <span className="task-text">{task.text}</span>
          <div className="task-actions">
            <button onClick={handleToggleImportance} className="important-button">
              {task.isImportant ? 'Снять важность' : 'Отметить как важную'}
            </button>
            <button onClick={handleEdit} className="edit-button">Редактировать</button>
            <button onClick={handleDelete} className="delete-button">Удалить</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Item;
