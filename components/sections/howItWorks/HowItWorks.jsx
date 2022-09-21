import Image from 'next/image';
import React from 'react';
import styles from "./HowItWorks.module.scss";

const HowItWorks = () =>{

    return(
        <div className={styles.howitworks}>
            <div className="container">
                <div className={styles.howitworksInner}>
                    <div className={styles.howitworksLeft}>
                        <Image
                            src="/images/howitwork.png"
                            height={535}
                            width={535}
                            alt="howitwork image"
                        />
                    </div>
                    <div className={styles.howitworksRight}>
                    <ul>
                        <li>Brush off Excess Dirt</li>
                        <li>Use our Shoeperior Solution</li>
                        <li>Scrub those Shoes Clean</li>
                        <li>Remove Residue</li>
                        <li>Dry Shoes</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;