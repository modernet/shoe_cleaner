import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './ProductSection.module.css';
import Shoes from '../../public/images/shoes.jpg';

export default function ProductSection() {
  return (
    <>
    <div id="productStory" className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
                <div className={styles.imageBackground}>
                    <Image  src={Shoes} alt="Product Image" />
                </div>
            </div>
            <div className={styles.content}>
                <h2 className={styles.h2}>The Best Sneaker Care Brand</h2>
                <h3>Superior care for your shoes</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget augue vitae massa vulputate tincidunt. Vestibulum sed urna sed enim facilisis hendrerit. Nulla facilisi. Donec et nunc risus. Ut scelerisque lacinia tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>
        </div>
          <Link href="/" passHref >
              <a className={styles.link}>READ OUR STORY</a>
          </Link>
    </div>   
    </>
  )
}
