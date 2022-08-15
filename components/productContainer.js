import React from "react";
import Product from '../components/Product';

const ProductContainer = ({products}) => {
  return (
    <div>
      <div id="product" className="product-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
