import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import { CssBaseline } from "@mui/material";
import PackageSection from "../components/PackageSection";

import React, { useState } from "react";
import { client } from "../lib/client";

import Product from '../components/Product';

export default function Home({products}) {
  return (
    <div>
      <CssBaseline>
        <Hero />
        <ProductSection />
        <div className="product-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
        <PackageSection />
        
        {/* <Simple deviceType="desktop"/> */}
      </CssBaseline>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  
  return {
    props: { products}
  }
}
