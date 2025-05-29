import RemoveItemIcon from "../assets/icon-remove-item.svg?react";
import CarbonNeutralIcon from "../assets/icon-carbon-neutral.svg?react";
import EmptyCartIcon from "../assets/illustration-empty-cart.svg?react";
import OrderConfirmedIcon from "../assets/icon-order-confirmed.svg?react";
import { useState, useEffect } from "react";

export default function Cart({ cartItems, handleRemoveItem }) {
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const [orderConfirmed, setOrderConfirmed] = useState(false); 
  function handleConfirmOrder() {
    setOrderConfirmed(true);
  }

  useEffect(() => {
    if(orderConfirmed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [orderConfirmed]);

  return (
    <section className="space-y-6 py-6 bg-white rounded-[12px]">
      <h2 className="space-y-6 text-2xl font-bold text-red px-6">
        Your Cart ({totalQuantity})
      </h2>
      {cartItems.length > 0 && (
        <>
          <ul className="space-y-4 h-[250px] overflow-y-auto px-6">
            {cartItems.map((item) => (
              <li key={item.name}>
                <div className="flex justify-between items-center pb-4 border-b border-rose-100">
                  <span className="space-y-2 text-sm">
                    <h3 className="font-semibold text-rose-900">{item.name}</h3>
                    <span className="space-x-2">
                      <span className="font-semibold text-red">
                        {item.quantity}x
                      </span>
                      <span className="text-rose-500">
                        @ ${item.price.toFixed(2)}
                      </span>
                      <span className="font-semibold text-rose-500">
                        ${item.totalPrice.toFixed(2)}
                      </span>
                    </span>
                  </span>
                  <button
                    className="text-rose-400 hover:text-rose-900 cursor-pointer w-5 h-5 border border-rose-400 hover:border-rose-900 
                    rounded-full flex items-center justify-center transition-all"
                    onClick={() => handleRemoveItem(item)}
                  >
                    <RemoveItemIcon />
                    <span className="sr-only">Remove</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="flex justify-between items-center text-rose-900 px-6">
            <span className="text-sm">Order Total</span>
            <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
          </p>
          <p className="flex items-center justify-center gap-2 py-4 bg-rose-50 mx-6">
            <CarbonNeutralIcon />
            <span className="text-sm">
              This is <strong>carbon-neutral</strong> delivery
            </span>
          </p>
          <div className="px-6">
            <button
              onClick={handleConfirmOrder}
              className="py-4 bg-red w-full text-white rounded-full 
              font-semibold cursor-pointer hover:bg-[#952C0B] transition-all"
            >
              Confirm Order
            </button>
          </div>
        </>
      )}
      {cartItems.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-4 py-4">
          <EmptyCartIcon />
          <p className="text-center text-sm text-rose-500">
            Your added items will appear here
          </p>
        </div>
      )}
      {orderConfirmed && (
        <div className="fixed inset-0 bg-black/50">
          <div className="flex justify-center items-center h-full md:px-10">
            <div className="bg-white text-black lg:max-w-[600px] w-full rounded-[12px] p-6">
              <OrderConfirmedIcon />
              <h2 className="text-2xl font-semibold text-red mt-6">
                Order Confirmed
              </h2>
              <p className="text-sm text-rose-500 mt-2">
                We hope you enjoy your food!
              </p>
              <div className="mt-8 bg-rose-50 rounded-[8px] py-6">
                <ul className="space-y-4 h-[250px] overflow-y-auto px-6">
                  {cartItems.map((item) => (
                    <li key={item.name}>
                      <div className="flex justify-between items-center pb-4 border-b border-rose-100">
                        <div className="flex gap-4">
                          <img
                            src={item.thumbnail}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-[8px]"
                          />
                          <span className="space-y-2 text-sm">
                            <h3 className="font-semibold text-rose-900">
                              {item.name}
                            </h3>
                            <span className="space-x-2">
                              <span className="font-semibold text-red">
                                {item.quantity}x
                              </span>
                              <span className="text-rose-500">
                                @ ${item.price.toFixed(2)}
                              </span>
                            </span>
                          </span>
                        </div>
                        <div className="font-semibold text-rose-500">
                          ${item.totalPrice.toFixed(2)}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="flex justify-between items-center text-rose-900 px-6">
                  <span className="text-sm">Order Total</span>
                  <span className="text-2xl font-bold">
                    ${totalPrice.toFixed(2)}
                  </span>
                </p>
              </div>
              <a
                href="/"
                className="py-4 bg-red w-full text-white rounded-full 
                font-semibold cursor-pointer block text-center"
              >
                Start New Order
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* 
[
    {
        "name": "Waffle with Berries",
        "price": 6.5,
        "quantity": 1,
        "totalPrice": 6.5
    }
]
*/
