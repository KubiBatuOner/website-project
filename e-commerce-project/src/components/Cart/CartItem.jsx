import { useDispatch } from "react-redux";

import { cartActions } from "../../redux/slices/cart/cartSlice";
import Button from "../UI/Button";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const addItemToCartHandler = () => {
    dispatch(cartActions.addItemToCart(item));
  };
  const removeItemFromCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(item.id));
  };
  return (
    <li
      key={item.id}
      className="flex gap-5 p-5 border shadow-lg bg-slate-200 rounded"
    >
      <div className="max-w-xs max-h-36 bg-white p-2  border rounded">
        <img
          className="w-full h-full object-contain"
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="flex flex-col items-start flex-auto">
        <h3 className="text-2xl font-bold color-gray-500">{item.title}</h3>
        <p className="text-gray-500">{item.brand}</p>
        <div className="flex items-center gap-2.5 mt-auto">
          <Button
            onClick={removeItemFromCartHandler}
            className="flex items-center justify-center bg-[#4361EE] font-semibold py-3 text-sm text-white gap-2.5 w-full hover:bg-[#7b90f3] hover:text-white"
          >
            -
          </Button>
          <span>{item.quantity}</span>
          <Button
            onClick={addItemToCartHandler}
            className="flex items-center justify-center bg-[#4361EE] font-semibold py-3 text-sm text-white gap-2.5 w-full hover:bg-[#7b90f3] hover:text-white"
          >
            +
          </Button>
        </div>
      </div>
      <div className="ml-auto">
        <p className="text-2xl font-bold color-gray-500">${item.price}</p>
      </div>
    </li>
  );
};
export default CartItem;
