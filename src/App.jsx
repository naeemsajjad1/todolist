import React, { useState } from 'react';
import TodoWrapper from './components/TodoWrapper';
import ContactForm from './components/ContactForm';
import './index.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {/* Regular desktop navbar */}
      <nav className="navbar desktop-navbar">
        <div className="navbar-brand">My Todo App</div>
        <ul className={`nav-links ${mobileMenuVisible ? 'hidden' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#contactus">Contact Us</a></li>
          <li><a href="#aboutus">About Us</a></li>
        </ul>
        {/* Mobile toggle button for smaller screens */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
      </nav>

      {/* Mobile navbar for smaller screens */}
      <nav className={`navbar mobile-navbar ${mobileMenuVisible ? 'visible' : ''}`}>
        <a href="#home" onClick={toggleMobileMenu}>Home</a>
        <a href="#contactus" onClick={toggleMobileMenu}>Contact Us</a>
        <a href="#aboutus" onClick={toggleMobileMenu}>About Us</a>
      </nav>

      {/* Main content */}
      <div className="homepage">
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
