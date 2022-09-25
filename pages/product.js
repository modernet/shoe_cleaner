import React from "react";
import { client } from "../lib/client";
import Product from "../components/Product";
import Products from "../components/sections/products/Products";

const Items = ({ products }) => {
  return (
    <div className="products-page">
      <Products />
      {/* {products?.map((product) => <Product  key={product._id} product={product} />)} */}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default Items;
