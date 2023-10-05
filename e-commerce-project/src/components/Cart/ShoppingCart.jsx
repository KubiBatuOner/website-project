import { useSelector } from "react-redux";

import Button from "../UI/Button";
import CartItem from "./CartItem";
const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="w-full flex gap-10 pt-5 px-5 sm:px-28  sm:py-20 ">
      <ul className="flex flex-col gap-5">
        {cart.products.map((product) => (
          <CartItem key={product.id} item={product} />
        ))}
      </ul>
      <div className="shadow-lg p-5 bg-slate-200 rounded self-start flex-auto">
        <div>
          <h2 className="text-xl font-bold text-gray-500">
            Total Products ({cart.totalQuantity})
          </h2>
          <p className="text-2xl font-bold color-gray-500 my-5">
            Total Price: ${cart.totalAmount}
          </p>
        </div>
        <Button className="flex items-center border-none justify-center bg-[#4361EE] font-semibold py-3 text-sm text-white gap-2.5 w-full hover:bg-[#7b90f3] hover:text-white">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};
export default ShoppingCart;
