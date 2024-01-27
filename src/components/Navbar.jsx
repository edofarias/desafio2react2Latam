
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import the App.css stylesheet

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-right">
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
};

export default Navbar;

