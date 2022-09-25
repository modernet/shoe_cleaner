import Image from "next/image";
import toast from "react-hot-toast";
import { HiMinus, HiPlus } from "react-icons/hi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useStateContext } from "../../../context/StateContext";
import getStripe from "../../../lib/getStripe";

const ShoppingCart = () => {
  const {
    showCart,
    onRemove,
    setShowCart,
    totalPrice,
    toggleCartItemQuanitity,
    cartItems,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className={`shopcart ${showCart ? "open" : null}`}>
      <button className="shopcartClose" onClick={() => setShowCart(false)}>
        Close
      </button>
      <h3 className="shopcartTitle">Your Cart</h3>
      <div className="shopcartInner">
        {cartItems.length < 1 && <p>No items on cart!</p>}
        {cartItems.length >= 1 &&
          cartItems.map((item) => (
            <div className="shopcartProduct" key={item.id}>
              <div className="shopcartProductImage">
                <Image
                  src={item.image}
                  width={127}
                  height={127}
                  alt={item.price}
                />
              </div>
              <div className="shopcartProductContent">
                <h4>{item.name}</h4>
                <h5>${item.price}</h5>
                <div className="shopcartQuantitybox">
                  <button
                    onClick={() => toggleCartItemQuanitity(item._id, "dec")}
                  >
                    <HiMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => toggleCartItemQuanitity(item._id, "inc")}
                  >
                    <HiPlus />
                  </button>
                </div>
              </div>
              <button
                className="shopcartProductClose"
                onClick={() => onRemove(item)}
              >
                <RiDeleteBin5Line/>
              </button>
            </div>
          ))}
      </div>
      <div className="shopcartFooter">
        <h5>
          Subtotal <span>${totalPrice}</span>
        </h5>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
