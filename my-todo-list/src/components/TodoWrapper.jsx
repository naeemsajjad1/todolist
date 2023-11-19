import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import EditTodoForm from './EditTodoForm';
import { v4 as uuidv4 } from 'uuid';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const addTodo = ({ task, priority, dueDate }) => {
    const newTodo = { id: uuidv4(), task, completed: false, isRead: false, priority, dueDate };
    const updatedTodos = [...todos, newTodo];
    saveTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    saveTodos(updatedTodos);
  };

  const editTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    saveTodos(updatedTodos);
  };

  const editTask = (task, id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    );
    saveTodos(updatedTodos);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={`TodoWrapper ${darkMode ? 'dark-mode' : ''}`}>
      <h1 className='todo-title'>My Task Planner</h1>
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
