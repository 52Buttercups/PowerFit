import React, { useState } from 'react';
import styles from './welcome.module.scss';
import SignUp from './SignUp';
import Login from './Login';

const Welcome = () => {
  const [showSignup, setShowSignup] = useState(true);
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        {showSignup ? <SignUp setShowSignup={setShowSignup} />
          : <Login setShowSignup={setShowSignup} />}
      </div>
      <div className={styles.heroText}>
        <h2>Sign Up or Log In to start working out</h2>
        <p>Some text here</p>
      </div>
    </div>
  );
};

export default Welcome;
