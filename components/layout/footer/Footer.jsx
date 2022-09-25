import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerInner">
          <div className="footerWidget">
            <h3 className="footerWidgetTitle">Company</h3>
            <ul>
              <li>
                <Link href="/">
                  <a>Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>About Us</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footerWidget">
            <h3 className="footerWidgetTitle">Customer Service</h3>
            <ul>
              <li>
                <Link href="/">
                  <a>FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Privacy & Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Terms & Conditions</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Shipping</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footerWidget">
            <h3 className="footerWidgetTitle">Sign Up To Newsletter</h3>
            <button>Sign Up</button>
            <p>Stay up to date with new products and promotions.</p>
          </div>
        </div>
        <div className="footerCopyright">
          <p>&copy; COPYRIGHT SHOEPERIOR 2022. ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
