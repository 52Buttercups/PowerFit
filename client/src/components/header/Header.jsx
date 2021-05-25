import React, { useContext } from 'react';
import styles from './header.module.scss';
import { UsersContext } from '../../context/UsersContext';

export const Header = () => {
  const { setLoggedInUser, loggedInUser } = useContext(UsersContext);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <i className="fas fa-dumbbell" />
        <h2>PowerFit</h2>
        <i className="fas fa-dumbbell" />
      </div>
      {loggedInUser
      && (
      <button
        onClick={() => setLoggedInUser(null)}
        className={styles.textButton}
      >
        Logout
      </button>
      )}
    </div>
  );
};

export default Header;
