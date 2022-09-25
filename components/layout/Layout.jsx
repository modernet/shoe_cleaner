import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import ShoppingCart from "./cart/ShoppingCart";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { useStateContext } from "../../context/StateContext";

const Layout = ({ children }) => {
  const { cartItems, setShowCart } = useStateContext();

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <ShoppingCart />
      <main className="pageContent">{children}</main>
      <Footer />
      <button className="cartButton" onClick={() => setShowCart(true)}>
        <HiOutlineShoppingCart />
        <span>{cartItems.length}</span>
      </button>
    </div>
  );
};

export default Layout;
