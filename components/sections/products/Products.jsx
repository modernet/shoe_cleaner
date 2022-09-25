import Product from "../../items/product/Product";

const Products = () => {
  return (
    <div className="products">
      <div className="shippingMessage">
        <p>FREE SHIPPING TO ORDERS MORE THAN $75</p>
        <p>FREE SHIPPING TO ORDERS MORE THAN $75</p>
        <p>FREE SHIPPING TO ORDERS MORE THAN $75</p>
        <p>FREE SHIPPING TO ORDERS MORE THAN $75</p>
      </div>
      <div className="container">
        <h2 className="productsTitle">Our Products</h2>
        <div className="prductsWrapper">
          <div className="productsItem">
            <Product />
          </div>
          <div className="productsItem">
            <Product />
          </div>
          <div className="productsItem">
            <Product />
          </div>
          <div className="productsItem">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
