import React, { useState, useContext } from 'react';
import styles from './signUp.module.scss';
import { APIContext } from '../../context/APIContext';

const SignUp = ({ setShowSignup }) => {
  const { registerUser } = useContext(APIContext);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
    } catch (err) {
      console.error(err);
    }
    setFormData({
      username: '',
      password: '',
    });
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
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
        onChange={changeHandler}
      />
      <div className={styles.formError}>
        {/* <p>error</p> */}
      </div>
      <label className={styles.inputLabel} htmlFor="password">
        Password
      </label>
      <input
        className={styles.input}
        autoComplete="on"
        id="password"
        type="password"
        name="password"
        value={formData.password}
        placeholder="Password"
        onChange={changeHandler}
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
