import styles from "./Header.module.scss";

const Header = () =>{
    return (
        <header className={styles.header}>
            <ul className={styles.headerMenu}>
                <li>
                    <a className="active" href="">Home</a>
                </li>
                <li>
                    <a href="">How it Works</a>
                </li>
                <li>
                    <a href="">About Us</a>
                </li>
                <li>
                    <a href="">Contact Us</a>
                </li>
            </ul>
        </header>
    )
}

export default Header;