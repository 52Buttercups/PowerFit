import React from 'react';
import styles from './welcome.module.css';
import SignUp from './SignUp';

const Welcome = () => (
  <div className={styles.container}>
    <div className={styles.formContainer}>
      <SignUp />
    </div>
    <div className={styles.heroText}>
      <h2>Sign Up or Log In to start working out</h2>
      <p>Some text here</p>
    </div>
  </div>
);

export default Welcome;
