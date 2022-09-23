import { Link as ScrollLink } from "react-scroll";
import styles from "./Header.module.scss";

const Header = () =>{
    return (
        <header className={styles.header}>
            <ul className={styles.headerMenu}>
                <li>
                    <ScrollLink
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    to="section-herosection"
                    >
                        Home
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        to="section-howitworks"
                        >
                            How it works
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        to="section-aboutus"
                        >
                            About Us
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        to="section-contactus"
                        >
                            Contact Us
                        </ScrollLink>
                </li>
            </ul>
        </header>
    )
}

export default Header;