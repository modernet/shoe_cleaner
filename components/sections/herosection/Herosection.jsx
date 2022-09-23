import Image from "next/image";
import Link from "next/link";
import styles from "./Herosection.module.scss";

const Herosection = () =>{
    return(
            <div className={styles.herosection}>
                <div className={styles.herosectionTop}>
                    <h1 className={styles.herosectionBgtitle}>
                        Shoe <br/> Perior
                    </h1>
                    <div className="container">
                        <div className={styles.herosectionTopInner}>
                            <div className={styles.herosectionImage}>
                                <Image
                                src="/images/hero-image.png"
                                height={605}
                                width={403}
                                alt="Hero-image"
                                />
                            </div>
                            <div className={styles.herosectionContent}>
                                <h1>Shoeperior</h1>
                                <p>
                                    Keep your head in the game with gentle, yet effective cleaning power in every pump.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.herosectionBottom}>
                    <div className="container">
                       <Link href="/product">
                        <a className={styles.herosectionButton}>Shop Now</a>
                       </Link>
                    </div>
                </div>
            </div>
    );
};

export default Herosection;