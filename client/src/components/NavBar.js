import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import useLocalStorage from '../hooks/useLocalStorage';

const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode('Dark Mode',false);

    const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

    return(
        <nav className="navbar">
            <div className="nav-title">
                <h1>
                    Lambda Sprint Challenge
                </h1>
            </div>
            <div className="nav-dark">
                <button onClick={toggleMode}>
                    Secret Mode
                </button>

            </div>
        </nav>
    )
}

export default NavBar;