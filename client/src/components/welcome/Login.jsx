import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.scss';
import { APIContext } from '../../context/APIContext';
import { UsersContext } from '../../context/UsersContext';

const Login = ({ setShowSignup }) => {
  const history = useHistory();
  const {
    errors, setErrors, formSubmitError, setFormSubmitError,
  } = useContext(UsersContext);
  const { loginUser } = useContext(APIContext);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const changeHandler = (e) => {
    setErrors({
      username: '',
      password: '',
    });
    setFormSubmitError('');
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = (data) => {
    const errs = {
      username: '',
      password: '',
    };
    if (!data.username) {
      errs.username = 'Must include a username';
    }
    if (!data.password) {
      errs.password = 'Must include a password';
    }
    setErrors({
      username: errs.username,
      password: errs.password,
    });
    if (!errs.username && !errs.password) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    const errs = validateForm(formData);
    if (!errs) {
      try {
        const res = await loginUser(formData);
        if (res) {
          localStorage.setItem('user', res);
          setTimeout(() => {
            history.push('/dashboard');
          }, 500);
        } else {
          setFormSubmitError('Invalid credentials');
        }
      } catch (err) {
        console.error(err);
      }
      setFormData({
        username: '',
        password: '',
      });
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <p className={styles.submitError}>{formSubmitError}</p>
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
        {errors.username && <p>{errors.username}</p>}
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
        {errors.password && <p>{errors.password}</p>}
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
