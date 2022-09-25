import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebarLogo">
        <Link href="/">
          <a>
            <Image
              src="/images/site-logo.png"
              height={44}
              width={64}
              alt="site-logo"
            />
          </a>
        </Link>
      </div>

      <div className="sidebarSocialmenu">
        <ul>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
