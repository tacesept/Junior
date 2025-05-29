import { useState } from "react";
import Desserts from "./components/Desserts";
import Cart from "./components/Cart";
import dataArray from "./data.json";

export default function App() {
  const [cartItemsArray, setCartItemsArray] = useState([]);

  function handleAddItems(itemObject) {
    setCartItemsArray([
      ...cartItemsArray,
      {
        name: itemObject.name,
        price: itemObject.price,
        quantity: 1,
        totalPrice: itemObject.price,
        thumbnail: itemObject.image.thumbnail,
      },
    ]);
  }

  function handleIncrementItem(itemObject) {
    setCartItemsArray(
      cartItemsArray.map((cartItem) =>
        cartItem.name === itemObject.name
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              totalPrice: cartItem.price * (cartItem.quantity + 1),
            }
          : cartItem
      )
    );
  }

  function handleDecrementItem(itemObject) {
    setCartItemsArray(
      cartItemsArray
        .map((cartItem) =>
          cartItem.name === itemObject.name
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1,
                totalPrice: cartItem.price * (cartItem.quantity - 1),
              }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  }

  function handleRemoveItem(itemObject) {
    setCartItemsArray(
      cartItemsArray.filter((cartItem) => cartItem.name !== itemObject.name)
    );
  }

  return (
    <main className="px-4 md:px-6 lg:px-8 py-6 md:py-10 lg:py-22">
      <div className="grid items-start grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <Desserts
          dataArray={dataArray}
          handleAddItems={handleAddItems}
          handleIncrementItem={handleIncrementItem}
          handleDecrementItem={handleDecrementItem}
          cartItems={cartItemsArray}
        />
        <Cart cartItems={cartItemsArray} handleRemoveItem={handleRemoveItem} />
      </div>
    </main>
  );
}
