import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <h1>Register</h1>

      <input type="email" placeholder="Your Email" />
      <br />
      <input type="password" placeholder="Your Password" />
      <br />
      <input type="submit" value="Register" />
      <h2>Already Register?</h2>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Register;
