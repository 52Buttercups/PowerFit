import React, { useState } from 'react';
import styles from './welcome.module.scss';
import SignUp from './SignUp';
import Login from './Login';

const Welcome = () => {
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        {showSignup ? <SignUp setShowSignup={setShowSignup} />
          : <Login setShowSignup={setShowSignup} />}
      </div>
      <div className={styles.heroText}>
        <h2>Signup or Login to Start Working Out</h2>
        <p>Some text here</p>
      </div>
    </div>
  );
};

export default Welcome;
