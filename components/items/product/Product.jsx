import Image from "next/image";
import Link from "next/link";

const Product = () => {
  return (
    <Link href="/product/hello">
      <a className="product">
        <div className="productImage">
          <Image
            src="/images/product-image.jpg"
            width={400}
            height={400}
            alt="product image"
          />
        </div>
        <div className="productContent">
          <div className="productContentInner">
            <h3>Shoeperior Cleaning Solution Kit</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <button>Add to cart</button>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Product;
