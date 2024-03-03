import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css';

const HomeScreen = ({ darkMode }) => {
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className={`HomeScreen ${darkMode ? 'dark-mode' : ''}`}>
      <div style={{ textAlign: 'center' }}>
        <h1>Opti-Lift</h1>
        <Link to="/accounts" style={{ textDecoration: 'none' }}>
          <button style={{ padding: '20px', fontSize: '20px', margin: '10px' }}>Google business accounts</button>
        </Link>
        <Link to="/new-client" style={{ textDecoration: 'none' }}> {/* Add Link to NewClientScreen */}
          <button style={{ padding: '20px', fontSize: '20px', margin: '10px' }}>Add Client</button>
        </Link>
        <Link to="/settings" style={{ textDecoration: 'none' }}>
          <button style={{ padding: '20px', fontSize: '20px', margin: '10px' }}>Settings</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;