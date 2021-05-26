import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './header.module.scss';
import { UsersContext } from '../../context/UsersContext';

export const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const { setLoggedInUser, loggedInUser } = useContext(UsersContext);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <i className="fas fa-dumbbell" />
        <h2>PowerFit</h2>
        <i className="fas fa-dumbbell" />
      </div>
      {(location.pathname === '/builder'
       || location.pathname === '/viewer') && (
       <button
         onClick={() => {
           history.push('/dashboard');
         }}
         className={styles.textButton}
       >
         Dashboard
       </button>
      )}
      {loggedInUser
      && (
      <button
        onClick={() => {
          setLoggedInUser(null);
          history.push('/');
        }}
        className={styles.textButton}
      >
        Logout
      </button>
      )}
    </div>
  );
};

export default Header;
