import Button from '@mui/material/Button';
import React from 'react';
import styles from './PackageSection.module.css';
import Image from 'next/image';

import Package from '../../public/images/shoes.jpg'


export default function PackageSection() {
  return (
    <>
        <div id="productSlides" className={styles.container}>
            
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    
                        <div className={styles.imgBackground}>
                            <Image src={Package} alt="test" />
                        </div>
                    
                </div>
                <div className={styles.contentContainer}>
                    <h4 className={styles.h5}>OUR PRODUCTS</h4>
                    <h2>Lorem ipsum dolor sit amet, consectetur</h2>
                    <Button size="large" variant="contained" sx={{
                        'backgroundColor' : '#000',
                        'textColor' : '#fff',
                        'borderRadius' : 8,
                        '&:hover' : {
                            color: '#fff',
                            backgroundColor: '#7851a9'
                        }
                    }}>
                        SHOP ALL OUR PRODUCTS
                    </Button>
                </div>
            </div>
        </div>
    </>
  )
}

