import Head from "next/head";
import "../styles/muiMaterial.css";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Toaster} from 'react-hot-toast';
import {StateContext} from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <StateContext>
      <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>

      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Toaster />
      <Component {...pageProps} />
      <Footer />
    </StateContext>
    </>
  );
}

export default MyApp;
