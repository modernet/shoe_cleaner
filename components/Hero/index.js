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
        <h1>
          THE <br />
          SUPERIOR <br />
          SHOE CARE
        </h1>
        <div className={styles.buttonWrapper}>
          <Button size="large" variant="contained" sx={{
            'background-color':'#7851a9', 
            'textColor':'#fff',
            'borderRadius': 8,
            '&:hover': {
              color: '#fff',
              backgroundColor: '#000',
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
