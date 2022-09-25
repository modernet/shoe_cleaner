import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  return (
    <header className="header">
      <ul className="headerMenu">
        <li>
          {router?.pathname === "/" ? (
            <ScrollLink
              activeClass="active"
              spy={true}
              smooth={true}
              to="section-herosection"
            >
              Home
            </ScrollLink>
          ) : (
            <Link href="/">
              <a>Home</a>
            </Link>
          )}
        </li>
        <li>
          {router?.pathname === "/" ? (
            <ScrollLink
              activeClass="active"
              spy={true}
              smooth={true}
              to="section-howitworks"
            >
              How it Works
            </ScrollLink>
          ) : (
            <Link href="/">
              <a>How it Works</a>
            </Link>
          )}
        </li>
        <li>
          {router?.pathname === "/" ? (
            <ScrollLink
              activeClass="active"
              spy={true}
              smooth={true}
              to="section-aboutus"
            >
              About Us
            </ScrollLink>
          ) : (
            <Link href="/">
              <a>About Us</a>
            </Link>
          )}
        </li>
        <li>
          {router?.pathname === "/" ? (
            <ScrollLink
              activeClass="active"
              spy={true}
              smooth={true}
              to="section-contactus"
            >
              Contact Us
            </ScrollLink>
          ) : (
            <Link href="/">
              <a>Contact Us</a>
            </Link>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
