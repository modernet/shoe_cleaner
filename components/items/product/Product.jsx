// import { style } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import styles from "./Product.module.scss";

const Product = () =>{
    return(
        <Link href="/product/hello">
            <a className={styles.product}>
            <Image 
            src="/images/product-image.jpg"
            width={400}
            height={400}
            alt="product image"
            />
            <div className={styles.productContent}>
                <div className={styles.productContentInner}>
                    <h3>Shoeperior Cleaning Solution Kit</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut sapiente modi numquam repellendus nostrum laborum voluptatibus, illo impedit similique necessitatibus ipsum possimus, est nesciunt, assumenda quae illum maxime? Magni.
                        Quia vel accusantium at, et sunt, sed consequatur necessitatibus fugiat nostrum aperiam quibusdam voluptatum magnam voluptatibus quidem perspiciatis minima suscipit ut consectetur optio assumenda vero placeat! Totam magni nisi vel!
                    </p>
                    <button>Add to cart</button>
                </div>
            </div>
        </a>
        </Link>
    );
};

export default Product;