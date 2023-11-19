// Todo.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const priorityClass = () => {
    switch (task.priority) {
      case 'Low':
        return 'low-priority';
      case 'Medium':
        return 'medium-priority';
      case 'High':
        return 'high-priority';
      default:
        return '';
    }
  };

  return (
    <div className={`Todo ${priorityClass()}`}>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ''}`}>
        {task.task} - Priority: {task.priority} - Due Date: {task.dueDate}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
