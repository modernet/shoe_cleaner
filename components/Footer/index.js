import React from 'react'
import Link from 'next/link'
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
                        <li><Link href="/">About Us</Link></li>
                        <li><Link href="/">Contact Us</Link></li>
                        <li><Link href="/">sample</Link></li>
                    </ul>
                </div>
                <div className={styles.googleMap}>
                    <h5 style={{
                        marginLeft: '10px'
                    }}>Come Visit Us!</h5>
                <iframe src="/iframe.html"  className={styles.iframe} ></iframe>
                </div>
            </div>
        </div>
    </>
  )
}
