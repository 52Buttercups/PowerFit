import React, { useState } from 'react';
import styles from './login.module.scss';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  return (
    <form className={styles.form}>
      <label className={styles.inputLabel} htmlFor="username">
        Username
      </label>
      <input className={styles.input} id="username" type="text" name="username" value={formData.username} placeholder="username" />
      <div className={styles.formError}>
        {/* <p>error</p> */}
      </div>
      <label className={styles.inputLabel} htmlFor="password">
        Password
      </label>
      <input className={styles.input} id="password" type="password" name="password" value={formData.password} placeholder="password" />
      <div className={styles.formError}>
        {/* <p>error</p> */}
      </div>
      <button type="submit">Login</button>
      <p className={styles.formSwitch}>
        Need to
        {' '}
        <span className={styles.formLink}>Signup</span>
        ?
      </p>
    </form>
  );
};

export default Login;
