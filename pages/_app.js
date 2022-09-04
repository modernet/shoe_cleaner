import Head from "next/head";
import "../styles/muiMaterial.css";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Toaster} from 'react-hot-toast';
import {StateContext} from '../context/StateContext';

function MyApp({ Component, pageProps, products }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <StateContext>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale = 1.0, 
maximum-scale=1.0, user-scalable=no" />

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

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  
  return {
    props: { products}
  }
}
