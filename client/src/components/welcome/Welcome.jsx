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
        <p>
          A smarter fitness application that allows
          users to spend more time working out and less time finding a workout.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
