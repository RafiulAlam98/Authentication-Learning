import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import './Header.css';
const Header = () => {
  const { user, googleSignOut } = useAuth();

  return (
    <div className="header">
      <Link to="/home">Home</Link>
      <Link to="/shipping">Shipping</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/placeorder">Place Order</Link>

      {user.email && <button onClick={googleSignOut}>Log out</button>}
    </div>
  );
};

export default Header;
