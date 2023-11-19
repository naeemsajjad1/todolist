import React, { useState } from 'react';
import TodoWrapper from './components/TodoWrapper';
import ContactForm from './components/ContactForm';
import './index.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <nav className="navbar">
        <div className="navbar-brand">My Todo App</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#contactus">Contact Us</a></li>
          <li><a href="#aboutus">About Us</a></li>
        </ul>
      </nav>
      <div className="homepage">
        {/* Existing sections */}
        <section className="section">
          <h2 className='todoabout'>About Todo List</h2>
          <p className='naeemtodo'>Naeem Sajjad-Todo-List</p>
          <TodoWrapper />
        </section>
        <section className="section">
          <h2 id='contactus'>Contact Us</h2>
          <ContactForm />
        </section>
        <section className="section" id='aboutus'>
          <h2 className='last-about'>About Us</h2>
          <p className='lastp'>its professional developer work dont try to copy or steal it.</p>
        </section>
      </div>
    </div>
  );
};

export default App;
