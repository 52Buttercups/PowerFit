import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import { UsersContext } from '../../context/UsersContext';
import styles from './header.module.scss';

export const Header = () => {
  const history = useHistory();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <i className="fas fa-dumbbell" />
        <h2>PowerFit</h2>
        <i className="fas fa-dumbbell" />
      </div>

      <div>
        <div className={styles.menu}>
          <IconButton style={{ marginLeft: 'auto' }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {(location.pathname === '/builder'
       || location.pathname === '/viewer') && (
       <MenuItem onClick={() => {
         handleClose();
         history.push('/dashboard');
       }}
       >
         Dashboard
       </MenuItem>
            )}
            {localStorage.getItem('user') && (
            <MenuItem onClick={() => {
              handleClose();
              localStorage.clear();
              history.push('/');
            }}
            >
              Logout
            </MenuItem>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
