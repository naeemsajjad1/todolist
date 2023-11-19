import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Normal');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ task, priority, dueDate });
    setTask('');
    setPriority('Normal');
    setDueDate('');
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={task}
        placeholder="Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <select
        className="priority-select"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Normal">Normal</option>
        <option value="High">High</option>
      </select>
      <input
        type="date"
        className="todo-input"
        value={dueDate}
        placeholder="Due Date"
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;