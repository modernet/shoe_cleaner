import Button from '@mui/material/Button';
import React from 'react';
import styles from './PackageSection.module.css';


export default function PackageSection() {
  return (
    <>
        <div id="productSlides" className={styles.container}>
            
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    
                        
                    
                </div>
                <div className={styles.contentContainer}>
                    <h4 className={styles.h5}>OUR PRODUCTS</h4>
                    <h2>Lorem ipsum dolor sit amet, consectetur</h2>
                    <Button href="/items" size="large" variant="contained" sx={{
                        'backgroundColor' : '#EBD247',
                        'color' : '#000',
                        'borderRadius' : 8,
                        '&:hover' : {
                            color: '#000',
                            backgroundColor: '#FAA82C'
                        }
                    }}>
                        SHOP NOW
                    </Button>
                </div>
            </div>
        </div>
    </>
  )
}



