import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useStateContext } from "../../../context/StateContext";

const Sidebar = () => {
  const { headerStatus, setHeaderStatus } = useStateContext();
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
              priority={true}
            />
          </a>
        </Link>
        <button 
        className="sidebarToggle"
        onClick={()=> setHeaderStatus(!headerStatus)}
        >
          { !headerStatus ? <HiOutlineMenu/> : <HiX/> }
        </button>
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
