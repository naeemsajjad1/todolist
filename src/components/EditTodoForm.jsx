import React, { useState } from 'react';

const EditTodoForm = ({ editTodo, task }) => {
  const [editedTask, setEditedTask] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(editedTask, task.id);
    setEditedTask('');
  };

  return (
    <form className="EditTodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="edit-todo-input"
        value={editedTask}
        placeholder="Update Task"
        onChange={(e) => setEditedTask(e.target.value)}
      />
      <button type="submit" className="edit-todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;