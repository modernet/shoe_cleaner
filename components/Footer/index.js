import React from 'react'

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
        <div className={styles.footerContainer}>
            <div className={styles.footerWrapper}>
                <div>
                    <ul className={styles.contact}>
                        <li>All Rights Reserved</li>
                        <li>2022 &copy;</li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">sample</a></li>
                    </ul>
                </div>
                <div className={styles.googleMap}>
                <iframe src="/iframe.html" width={100%} height="100vh" ></iframe>
                </div>
            </div>
        </div>
    </>
  )
}
