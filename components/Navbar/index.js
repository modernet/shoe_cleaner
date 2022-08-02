import React,{useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Menu from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import {MobileIcon, Nav, NavbarContainer, NavLogo, NavMenu} from './styledcomponent';
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

  return (
    <>
    <Nav scrollNav={scrollNav} >
      <NavbarContainer>
        <MobileIcon>
        <Menu className="menu" sx={{ color:'#fff', cursor:'pointer'}} onClick={toggle}/>
        </MobileIcon>
        <NavLogo><img src="" alt="Logo" /></NavLogo>
        <ShoppingCart sx={{ color:'#fff', cursor:'pointer'}} />
        
      </NavbarContainer>
    </Nav>
    </>
  )
}
