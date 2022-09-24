import React from 'react';
import Products from '../components/sections/products/Products';
import { client } from "../lib/client";

const Items = ({ products }) => {
  console.log(products)
  return (
    <div className="products-page" >
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

