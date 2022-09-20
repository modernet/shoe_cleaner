import Hero from "../components/Hero";
// import ProductSection from "../components/ProductSection";
import { CssBaseline } from "@mui/material";
// import PackageSection from "../components/PackageSection";

import React from "react";
import { client } from "../lib/client";
// import ProductContainer from "../components/productContainer";
// import Product from '../components/Product';
// import Gallery from "../components/Carousel";
// import ProductDetails from "./product/[slug]";

export default function Home({ products }) {
  return (
    <div>
      <CssBaseline>
        <Hero />
        <div id="product" className="product-container">
          {/* {products?.map((product) => <Product key={product._id} product={product} />)} */}
        </div>
        {/* <ProductSection />
        <PackageSection /> */}

        {/* <Simple deviceType="desktop"/> */}
      </CssBaseline>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products }
  }
}
