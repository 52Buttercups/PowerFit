import React from 'react';
import styles from './header.module.scss';

export const Header = () => (
  <div className={styles.headerContainer}>
    <div className={styles.logo}>
      <i className="fas fa-dumbbell" />
      <h2>PowerFit</h2>
      <i className="fas fa-dumbbell" />
    </div>
    <button className={styles.textButton}>Logout</button>
  </div>
);

export default Header;
