import React, { useState } from 'react';
import styles from './login.module.scss';

const Login = ({ setShowSignup }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  return (
    <form className={styles.form}>
      <label className={styles.inputLabel} htmlFor="username">
        Username
      </label>
      <input className={styles.input} id="username" type="text" name="username" value={formData.username} placeholder="Username" />
      <div className={styles.formError}>
        {/* <p>error</p> */}
      </div>
      <label className={styles.inputLabel} htmlFor="password">
        Password
      </label>
      <input className={styles.input} id="password" type="password" name="password" value={formData.password} placeholder="Password" />
      <div className={styles.formError}>
        {/* <p>error</p> */}
      </div>
      <button type="submit">Login</button>
      <p className={styles.formSwitch}>
        Need to
        {' '}
        <span onClick={() => setShowSignup(true)} className={styles.formLink}>Signup</span>
        ?
      </p>
    </form>
  );
};

export default Login;
