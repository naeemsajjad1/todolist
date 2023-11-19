// TodoWrapper.js
import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import EditTodoForm from './EditTodoForm';
import { v4 as uuidv4 } from 'uuid';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addTodo = (task, priority, dueDate) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task, completed: false, isRead: false, priority, dueDate },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`TodoWrapper ${darkMode ? 'dark-mode' : ''}`}>
      <h1>My Task Planner</h1>
      <button onClick={toggleDarkMode} className="dark-mode-btn">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} key={index} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
