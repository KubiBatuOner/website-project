import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../logo.svg";
import MainNavigation from "./MainNavigation";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchProductData } from "../../redux/slices/product/searchProductsSlice";
const Header = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() !== "") {
      dispatch(fetchSearchProductData(inputRef.current.value));
      inputRef.current.value = "";
      navigate("/search");
    }
  };

  return (
    <div className="flex flex-col gap-y-10 shadow-lg py-5 px-28">
      <div className="flex justify-around items-center pt-6">
        <div className="w-12 ">
          <Link to="/">
            <img className="w-full" src={Logo} alt="logo" />
          </Link>
        </div>
        <form
          onSubmit={submitHandler}
          className="flex justify-between items-center border border-gray-400 w-1/2 rounded-md"
        >
          <div className="flex justify-center items-center py-2">
            <div className="px-2">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#8490a9" }}
              />
            </div>
            <div>
              <input
                ref={inputRef}
                type="text"
                className="pl-4 pr-2 w-full rounded-full focus:outline-none"
              />
            </div>
          </div>
          <div>
            <button className="bg-[#4361EE] hover:bg-[#7b90f3]  text-white rounded-r p-2 font-semibold">
              Search
            </button>
          </div>
        </form>
        <div className="flex justify-between items-center gap-x-4">
          <button className="py-2 px-4x border relative gap-x-3 inline-flex items-center justify-center p-4 px-5 overflow-hidden text-white transition duration-300 ease-out rounded-xl shadow-xl group bg-[#4361EE] hover:bg-[#7b90f3] font-semibold">
            <FontAwesomeIcon icon={faUser} style={{ color: "#fff" }} />
            Profile
          </button>
          <Link
            to="/cart"
            className=" border flex items-center justify-center gap-x-3 p-4 px-5 py-2 overflow-hidden text-white transition duration-300 ease-out rounded-xl shadow-xl group bg-[#4361EE] hover:bg-[#7b90f3] font-semibold"
          >
            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#fff" }} />
            Cart
            {cart && (
              <span className="bg-[#6981f1]  rounded-lg px-2">
                {cart.totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
      <MainNavigation />
    </div>
  );
};
export default Header;
