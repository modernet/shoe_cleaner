import React from 'react';
import Product from "../components/Product";
import { client } from '../lib/client';

const ProductMap = ({products}) => {
  return (
    <>
    
    </>
  )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    
    return {
      props: { products}
    }
}

export default ProductMap