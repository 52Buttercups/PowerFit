import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './signUp.module.scss';
import { APIContext } from '../../context/APIContext';
import { UsersContext } from '../../context/UsersContext';

const SignUp = ({ setShowSignup }) => {
  const history = useHistory();
  const {
    loggedInUser, setLoggedInUser, errors, setErrors, canSubmit, setCanSubmit,
  } = useContext(UsersContext);
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
    const errs = validateForm(formData);
    if (!errs) {
      try {
        const res = await registerUser(formData);
        if (res) {
          setLoggedInUser(res);
          setTimeout(() => {
            history.push('/dashboard');
          }, 500);
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
      disabled={!errors.password && !errors.username}
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
