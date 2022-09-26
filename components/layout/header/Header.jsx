import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useStateContext } from "../../../context/StateContext";

const Header = () => {
  const router = useRouter();
  const { headerStatus, setHeaderStatus} = useStateContext(); 
  const [ sticky, setSticky] = useState(false);

  useEffect(()=>{
    if(typeof window !== undefined){
      window.addEventListener("scroll", function (e){
        if (window.scrollY > 0){
          setSticky(true);
        } else{
          setSticky(false);
        }
      })
    }
  },[])

  return (
    <header
     className={`header ${headerStatus ? "open" : null} ${sticky ? "sticky" : null}`}>
      <ul className="headerMenu">
        <li>
          {router?.pathname === "/" ? (
            <ScrollLink
              activeClass="active"
              spy={true}
              smooth={true}
              to="section-herosection"
              onClick={()=> setHeaderStatus(false)}
            >
              Home
            </ScrollLink>
          ) : (
            <Link href="/">
              <a onClick={() => setHeaderStatus(false)}>Home</a>
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
              onClick={()=> setHeaderStatus(false)}
            >
              How it Works
            </ScrollLink>
          ) : (
            <Link href="/">
              <a onClick={()=> setHeaderStatus(false)}>How it Works</a>
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
              onClick={()=> setHeaderStatus(false)}
            >
              About Us
            </ScrollLink>
          ) : (
            <Link href="/">
              <a onClick={()=> setHeaderStatus(false)}>About Us</a>
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
              onClick={()=> setHeaderStatus(false)}
            >
              Contact Us
            </ScrollLink>
          ) : (
            <Link href="/">
              <a onClick={()=> setHeaderStatus(false)}>Contact Us</a>
            </Link>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
