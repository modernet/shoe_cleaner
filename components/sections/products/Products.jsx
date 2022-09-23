import Product from "../../items/product/Product";
import styles from "./Products.module.scss";

const Products = () =>{
    return(
        <div className={styles.products}>
            <div className="container">
                <h2 className={styles.productsTitle}>
                    Our Products
                </h2>
                <div className={styles.productsWrapper}>
                    <div className={styles.productsItem}>
                        <Product/>
                    </div>
                    <div className={styles.productsItem}>
                        <Product/>
                    </div>
                    <div className={styles.productsItem}>
                        <Product/>
                    </div>
                    <div className={styles.productsItem}>
                        <Product/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
