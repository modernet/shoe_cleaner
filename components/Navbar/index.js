import React,{useState, useEffect} from 'react';
import Menu from '@mui/icons-material/Menu';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import {Nav} from './styledcomponent';
import styles from './Navbar.module.css';
import Cart from '../Cart';
import { useStateContext } from '../../context/StateContext';
import { useRouter } from 'next/router';


export default function Navbar({toggle}) {
  const [scrollNav, setScrollNav] = useState(false);
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const router = useRouter();


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
      <div className={styles.nav}>
        <div className={styles.navWrapper}>
        <button type="button" className="cart-icon">
        <Menu sx={{  color : router.route == "/" ? "#fff" : "#000", cursor:'pointer'}} onClick={toggle}/>
        </button>
        <a><img src="" alt="Logo" /></a>
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <ShoppingCart  sx={{ color : router.route == "/" ? "#fff" : "#000", cursor:'pointer'}} />
        <span className="cart-item-qty">{totalQuantities}</span>
        </button>

        {showCart && <Cart />}
        </div>
      </div>
    </Nav>
    </>
  )
}
