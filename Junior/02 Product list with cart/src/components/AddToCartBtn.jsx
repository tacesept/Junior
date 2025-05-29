import { useState, useEffect } from "react";

import AddToCartIcon from "../assets/icon-add-to-cart.svg?react";
import DecrementIcon from "../assets/icon-decrement-quantity.svg?react";
import IncrementIcon from "../assets/icon-increment-quantity.svg?react";

export default function AddToCartBtn({
  handleAddItems,
  handleIncrementItem,
  handleDecrementItem,
  dessertObject,
  cartItems, 
}) {
  const [isItemInCart, setIsItemInCart] = useState(false);

  const thisCartItem = cartItems && cartItems.find(
    (cartItem) => cartItem.name === dessertObject.name
  );  

  useEffect(() => {
    if (thisCartItem && thisCartItem.quantity > 0) {
      setIsItemInCart(true);
    } else {
      setIsItemInCart(false);
    }
    console.log("hi");
  }, [thisCartItem]);  

  return (
    <div className="w-[160px] absolute bottom-0 left-1/2 -translate-x-1/2">
      {!isItemInCart && (
        <button
          onClick={() => handleAddItems(dessertObject)}
          className="w-full py-3 flex items-center justify-center gap-2 bg-white text-rose-900 hover:text-red 
          rounded-full border border-rose-400 hover:border-red transition-all z-10 cursor-pointer"
        >
          <AddToCartIcon />
          <span className="text-nowrap">Add to Cart</span>
        </button>
      )}
            
      {isItemInCart && (
        <div className="w-full p-3 bg-red flex justify-between items-center rounded-full border border-rose-400">
          <button
            onClick={() => handleDecrementItem(dessertObject)}
            className="cursor-pointer w-5 h-5 border border-white rounded-full flex items-center justify-center"
          >
            <DecrementIcon />
          </button>
          <span className="text-white text-sm font-bold">
            {thisCartItem ? thisCartItem.quantity : 0}
          </span>
          <button
            onClick={() => handleIncrementItem(dessertObject)}
            className="cursor-pointer w-5 h-5 border border-white rounded-full flex items-center justify-center"
          >
            <IncrementIcon />
          </button>
        </div>
      )}
    </div>
  );
} 
