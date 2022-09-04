import Button from '@mui/material/Button';
import React from 'react';
import styles from './PackageSection.module.css';
import Gallery from '../Carousel/index';

export default function PackageSection() {
  return (
    <>
        <div id="productSlides" className={styles.container}>
            
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    <Gallery />
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.fonts}>
                    <h4 className={styles.h5}>OUR PRODUCTS</h4>
                    <h2 className={styles.h2}>Lorem ipsum dolor sit amet, consectetur</h2>
                    </div>
                    <Button href="/product" size="large" variant="contained" sx={{
                        'backgroundColor' : '#EBD247',
                        'color' : '#fff',
                        'borderRadius' : 8,
                        'marginLeft' : '40px',
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



