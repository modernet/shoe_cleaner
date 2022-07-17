import React from 'react';
import Button from '@mui/material/Button';
import CallMade from '@mui/icons-material/CallMade';

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
        <h1 className={styles.text}>
          THE <br />
          SUPERIOR <br />
          SHOE CLEANER
        </h1>
        <div className={styles.buttonWrapper}>
          <Button size="large" variant="contained" sx={{
            'backgroundColor':'#FFD700', 
            'color':'#000',
            'borderRadius': 8,
            '&:hover': {
              color: '#fff',
              backgroundColor: '#7851a9',
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
