import React, { useState } from 'react';
import styles from './signUp.module.scss';

const SignUp = ({ setShowSignup }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const changeHander = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className={styles.form}>
      <label className={styles.inputLabel} htmlFor="username">
        Username
      </label>
      <input
        className={styles.input}
        id="username"
        type="text"
        name="username"
        value={formData.username}
        placeholder="Username"
        onChange={changeHander}
      />
      <div className={styles.formError}>
        {/* <p>error</p> */}
      </div>
      <label className={styles.inputLabel} htmlFor="password">
        Password
      </label>
      <input
        className={styles.input}
        id="password"
        type="password"
        name="password"
        value={formData.password}
        placeholder="Password"
        onChange={changeHander}
      />
      <div className={styles.formError}>
        {/* <p>error</p> */}
      </div>
      <button type="submit">Signup</button>
      <p className={styles.formSwitch}>
        Need to
        {' '}
        <span onClick={() => setShowSignup(false)} className={styles.formLink}>Login</span>
        ?
      </p>
    </form>
  );
};

export default SignUp;
