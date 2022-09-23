import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import styles from "./Layout.module.scss";
import Sidebar from './sidebar/Sidebar';

const Layout = ({children}) => {
  return (
    <div className={styles.wrapper}>
        <Header />
        <Sidebar/>
        <main className={styles.pageContent}>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout;