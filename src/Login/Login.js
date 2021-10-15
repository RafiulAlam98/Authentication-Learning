import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Loging = () => {
  const { googleSignIn } = useAuth();
  console.log(googleSignIn);

  return (
    <div>
      <h2>Login Here</h2>
      <input type="email" placeholder="Your Email" />
      <br />
      <input type="password" placeholder="Your Password" />
      <br />
      <input type="submit" value="Login" onClick={googleSignIn} />
      <h2>Not An Account?</h2>
      <Link to="register">
        <button>Register Now</button>
      </Link>
    </div>
  );
};

export default Loging;
