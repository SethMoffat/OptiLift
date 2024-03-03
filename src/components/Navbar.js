import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/settings">Settings</Link>
      {/* Add more links as needed */}
    </div>
  );
};

export default Navbar;