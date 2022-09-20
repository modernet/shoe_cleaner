import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from "./Sidebar.module.scss";

const Sidebar = () =>{
  return (
    <aside className={styles.sidebar}>
        <div className={styles.sidebarLogo}>
            <Link href="/">
                <a>
                    <Image
                    src="/images/site-logo.png"
                    height={44}
                    width={64}
                    alt="site-logo"
                    />
                </a>
            </Link>
        </div>

        <div className={styles.sidebarSocialmenu}>
            <ul>
                <li>
                    <a href="#">Twitter</a>
                </li>
                <li>
                    <a href="#">Instagram</a>
                </li>
                <li>
                    <a href="#">Facebook</a>
                </li>
            </ul>
        </div>
    </aside>
  );
};

export default Sidebar;