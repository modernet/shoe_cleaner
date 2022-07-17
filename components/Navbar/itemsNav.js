import React,{useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';
import AppBar from '@mui/material/AppBar';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import {Nav} from './styledcomponent';
import styles from './Navbar.module.css';


export default function Navbar({toggle}) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 650) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });

  const handlePageChane = () => {
    window.location.href="/"
  };

  return (
    <>
    <Nav scrollNav={scrollNav} >
      <div className={styles.nav}>
        <div className={styles.navWrapper}>
        <HomeIcon onClick={handlePageChane} sx={{ color:'#fff', cursor:'pointer'}} />
        <a><img src="" alt="Logo" /></a>
        <ShoppingCart sx={{ color:'#fff', cursor:'pointer'}} />
        </div>
      </div>
    </Nav>
    </>
  )
}
