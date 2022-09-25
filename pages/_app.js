import Head from "next/head";
import React, { useState } from "react";
// import "../styles/muiMaterial.css";
import "../styles/global.scss";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
// import Footer from "../components/Footer";
import Layout from "../components/layout/Layout";
import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StateContext>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale = 1.0, 
maximum-scale=1.0, user-scalable=no"
          />
        </Head>
        {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> */}
        <Toaster />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* <Footer /> */}
      </StateContext>
    </>
  );
}

export default MyApp;

// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query);

//   return {
//     props: { products },
//   };
// };
