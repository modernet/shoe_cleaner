import Image from "next/image";
import styles from "./AboutUs.module.scss";

const AboutUs = () =>{
    return(
        <div className={styles.aboutus}>
            <div className="container">
                <div className={styles.aboutusInner}>
                    <div className={styles.aboutLeft}>
                        <Image 
                        src="/images/about-image.jpg"
                        width={454}
                        height={454}
                        alt="about us image"
                        />
                    </div>
                    <div className={styles.aboutRight}>
                        <p>The Shoeperior Difference</p>
                        <p>
                            Here at Shoeperior, we believe in a team oriented approach to
                            everything we do. Our greatest achievement is not only providing
                            the highest quality shoe care products, but the nationwide network
                            of amazing people distributing, using, and loving our products. We
                            have been cleaning shoes since 1992! Our team is on the ground
                            cleaning shoes to this day. We work hard, but stay fresh doing it.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
