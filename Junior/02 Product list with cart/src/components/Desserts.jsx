import AddToCartBtn from "./AddToCartBtn";

export default function Desserts({
  dataArray,
  handleAddItems,
  handleIncrementItem,
  handleDecrementItem, 
  cartItems, 
}) {
  const desserts = dataArray.map((dessertObject, index) => {
    const thisCartItem = cartItems && cartItems.find(
      (cartItem) => cartItem.name === dessertObject.name
    );   

    return (
      <section key={index} className="relative flex flex-col-reverse w-full">
        <div className="mt-4 space-y-1">
          <p className="text-sm text-rose-500">{dessertObject.category}</p>
          <h2 className="font-semibold text-rose-900">{dessertObject.name}</h2>
          <p className="font-semibold text-red">
            ${dessertObject.price.toFixed(2)}
          </p>
        </div>
        <div className="relative">
          <picture>
            <source
              srcSet={dessertObject.image.desktop}
              media="(min-width: 1024px)"
            />
            <source
              srcSet={dessertObject.image.tablet}
              media="(min-width: 768px)"
            />
            <img
              src={dessertObject.image.mobile}
              alt={dessertObject.name}
              width={327}
              height={212}
              className={`w-full ${thisCartItem && thisCartItem.quantity > 0 ? "outline outline-2 outline-red" : ""}`}
            />
          </picture>
          <div className="h-[22px] w-full"></div>
          <AddToCartBtn
            dessertObject={dessertObject}
            handleAddItems={handleAddItems}
            handleIncrementItem={handleIncrementItem}
            handleDecrementItem={handleDecrementItem} 
            cartItems={cartItems}  
          />
        </div>
      </section>
    );
  });

  return (
    <div>
      <h1 className="text-[2.5rem] leading-[1.2] font-bold text-rose-900 mb-6">
        Desserts
      </h1>
      <div className="grid md:grid-cols-3 mx-auto gap-6 md:gap-y-8">
        {desserts}
      </div>
    </div>
  );
}
