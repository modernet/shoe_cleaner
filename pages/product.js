import React from 'react';
import { client } from "../lib/client";
import Product from '../components/Product';

const Items = ({products}) => {
  return (
    <div>
        <div className="products-page" >
        {products?.map((product) => <Product  key={product._id} product={product} />)}
        </div>
    </div>
  )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    
    return {
      props: { products}
    }
}

export default Items

