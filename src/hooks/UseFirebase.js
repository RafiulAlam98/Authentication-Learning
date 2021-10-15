import initializeAuthentication from '../Firebase/firebase.init';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  // sign in
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  // sign out
  const googleSignOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log('get user', user);
        setUser(user);
      }
    });
  }, []);
  return {
    user,
    error,
    googleSignIn,
    googleSignOut,
  };
};

export default useFirebase;
