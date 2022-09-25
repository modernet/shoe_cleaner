import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useStateContext } from "../../context/StateContext";
import ShoppingCart from "./cart/ShoppingCart";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Layout = ({ children }) => {
  const { cartItems, setShowCart } = useStateContext();

  return (
    <div className="wrapper">
      <div className="notifyMessage">
        FREE SHIPPING TO ORDERS MORE THAN $75
        </div>
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
