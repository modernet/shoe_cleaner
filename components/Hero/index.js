import React from 'react';
import Button from '@mui/material/Button';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.hero}>
        <video autoPlay muted loop className={styles.video}>
            <source src="videos/skateboard.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.content}>
        <h1>
          THE <br />
          SUPERIOR <br />
          SHOE CARE
        </h1>
        <div className={styles.buttonWrapper}>
          <Button variant="contained" sx={{
            'background-color':'#7851a9', 
            'textColor':'#f444'
            }}>
            Buy Now!
          </Button>
        </div>
      </div>
    </div>
    </>
  )
}
