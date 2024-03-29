import React from 'react';
import Button from '@mui/material/Button';
import CallMade from '@mui/icons-material/CallMade';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.hero}>
        <video autoPlay={true} playsInline muted loop={true} className={styles.video}>
            <source src="videos/shoescleaning.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.content}>
        <h1 className={styles.text}>
          THE <br />
          SUPERIOR <br/>
          <span className={styles.colorChange}>SHOE CARE</span>
        </h1>
        <div className={styles.buttonWrapper}>
          <Button href="/product" size="large" variant="contained" sx={{
            'backgroundColor':'#EBD247', 
            'color':'#fff',
            'borderRadius': 8,
            '&:hover': {
              color: '#000',
              backgroundColor: '#FAA82C',
            }
            }}>
            SHOP NOW   <CallMade fontSize="inherit"/>
          </Button>
        </div>
      </div>
    </div>
    </>
  )
}
