import Image from "next/image";
import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import { useStateContext } from "../../../context/StateContext";
import styles from "./ProductDetails.module.scss";

const ProductDetails = () => {
  const [includeKitStatus, setIncludeKitStatus] = useState(false);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  return (
    <div className={styles.prodetails}>
      <div className="container">
        <div className={styles.prodetailsInner}>
          <div className={styles.prodetailsImage}>
            <Image
              src="/images/product-image.jpg"
              width={464}
              height={464}
              alt="product name"
            />
          </div>
          <div className={styles.prodetailsContent}>
            <h2>SHOEPERIOR SIGNATURE CLEANING KIT</h2>
            <h4>$35</h4>
            <p>
              Everyday necessities for everyday cleaning. Our Care Kit is a
              thoughtful curation of trusted favorites to help clean, condition,
              and protect anything, anywhere. Our Ready-To-Use Foam paired with
              our Premium Cleaning Brush provides a powerful clean that’s gentle
              enough for delicates. After cleaning, lightly mist our Repel Spray
              for protection from spills, stains, rain, or shine. And in case
              you’re heading out the door, our individually packaged Quick Wipe
              makes it convenient to care on the go.
            </p>
            <p>
              Safe on all materials such as leather, suede, nubuck, cotton, and
              knits.
            </p>
            <div className={styles.prodetailsIncluded}>
              <div className={styles.prodetailsIncludedOpener}>
                <h5>Included in kit</h5>
                <button onClick={() => setIncludeKitStatus(!includeKitStatus)}>
                  {includeKitStatus ? <HiMinus /> : <HiPlus />}
                </button>
              </div>

              <div
                className={
                  includeKitStatus
                    ? `${styles.prodetailsIncludedInsideActive}`
                    : `${styles.prodetailsIncludedInside}`
                }
              >
                <div
                  className={
                    includeKitStatus
                      ? `${styles.prodetailsIncludedInnerActive}`
                      : `${styles.prodetailsIncludedInner}`
                  }
                >
                  <div className={styles.prodetailsIncludedBody}>
                    <div className={styles.prodetailsIncludedCloser}>
                      <h5>Included in kit</h5>
                      <button
                        onClick={() => setIncludeKitStatus(!includeKitStatus)}
                      >
                        {includeKitStatus ? <HiMinus /> : <HiPlus />}
                      </button>
                    </div>
                    <h6>7oz. Ready-To-Use Foam Cleaner</h6>
                    <p>
                      Premium cleaning and conditioning power in every pump.
                      Designed with ease in mind, our RTU Foam dispenses the
                      perfect ratio of solution to water for the most effective
                      clean every single time.
                    </p>
                    <h6>2oz. Repel Spray</h6>
                    <p>
                      Designed to prepare you for any forecast. Our water-based
                      formula creates a durable, but breathable barrier that
                      safely protects suede, nubuck, nylon, canvas, cotton,
                      knits, and all other absorbent materials.
                    </p>
                    <h6>Premium Cleaning Brush</h6>
                    <p>
                      Don’t worry about it, seriously. Crafted from soft hog’s
                      hair bristles and walnut wood, our Premium Brush cleans
                      with care. Gentle for delicate materials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              *We do not recommend cleaning unsealed, painted leather. Use extra
              care when cleaning dyed suede as its color is likely to bleed with
              any contact with water. The Shoeperior Cleaning Brush is
              recommended for cleaning delicate materials such as premium
              leather, suede or cotton mesh.
            </p>
           <div className={styles.prodetailsContentFooter}>
              <p className="mb-0">
                  <span>Free Domestic Shipping over $75</span>
                </p>
                <p>
                  <span>Questions?</span>
                  <a href="mailto:help@shoeperior.com">help@shoeperior.com</a>
                </p>
           </div>
            <div className={styles.prodetailsCartbox}>
              <div className={styles.prodetailsQuantitybox}>
                <button onClick={decQty}>
                  <HiMinus />
                </button>
                <span>{qty}</span>
                <button onClick={incQty}>
                  <HiPlus />
                </button>
              </div>
              <button 
              className={styles.prodetailsCartbutton}
              onClick={()=> onAdd(
                {
                  image: "./images/product-image.jpg",
                  name: "Product Name",
                  price: 200,
                },
                qty
              )}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;