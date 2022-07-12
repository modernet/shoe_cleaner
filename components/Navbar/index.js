import React from 'react';
import Container from '@mui/material/Container';
import Menu from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

import styles from './Navbar.module.css';


export default function Navbar() {
  return (
    <>
    <Container >
      <div className={styles.nav}>
        <div className={styles.navWrapper}>
        <Menu sx={{ color:'#fff', cursor:'pointer'}} />
        <a><img src="" alt="Logo" /></a>
        <ShoppingCart sx={{ color:'#fff', cursor:'pointer'}} />
        </div>
      </div>
    </Container>
    </>
  )
}
