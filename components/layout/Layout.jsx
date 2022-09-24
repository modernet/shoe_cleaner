import React from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useStateContext } from '../../context/StateContext';
import ShoppingCart from './cart/ShoppingCart';
import Footer from './footer/Footer';
import Header from './header/Header';
import styles from "./Layout.module.scss";
import Sidebar from './sidebar/Sidebar';

const Layout = ({children}) => {
  const { cartItems, setShowCart } =useStateContext();

  return (
    <div className={styles.wrapper}>
        <Header />
        <Sidebar/>
        <ShoppingCart/>
        <main className={styles.pageContent}>
            {children}
        </main>
        <Footer/>
        <button className={styles.cartButton} onClick={()=> setShowCart(true)}>
            <HiOutlineShoppingCart/>
            <span>{cartItems.length}</span>
        </button>
    </div>
  )
}

export default Layout;