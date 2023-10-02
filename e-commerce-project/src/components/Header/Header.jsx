import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../logo.svg";
import MainNavigation from "./MainNavigation";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    // Header Container
    <div className="sm:inline-flex flex-col sm:gap-y-10 sm:gap-x-1 gap-x-4 shadow-lg  pt-5 pb-5 lg:py-10 sm:px-2 px-4 flex-wrap ">
      <div className="flex justify-around items-center sm:py-6 md:py-7 py-10 ">
        {/* Logo */}
        <div className="w-12 ">
          <Link to="/">
            <img className="w-8 sm:w-10 lg:w-full" src={Logo} alt="logo" />
          </Link>
        </div>
        {/* Search Bar */}
        <div className="flex justify-between  items-center border border-gray-400 w-1/2 rounded-md">
          <div className="flex justify-center items-center py-2">
            {/* Magnifying Glass View */}
            <div className="px-2">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#8490a9" }}
              />
            </div>
            {/* Input Field */}
            <div>
              <input
                type="text"
                className="pl-4 pr-2 w-full rounded-full focus:outline-none"
              />
            </div>
          </div>
          {/* Search Button */}
          <div>
            <button className="bg-gradient-to-br from-[#8767e7] to-[#7209B7]  text-white rounded-r p-2 font-semibold ">
              Search
            </button>
          </div>
        </div>
        {/* Header Button Container */}
        <div className="flex justify-between items-center gap-x-4">
          {/* Profile Button */}
          <button className="hidden sm:inline-flex py-2 sm:px-2 border relative sm:gap-x-2 gm-gap-x-3 items-center justify-center p-3 px-5 overflow-hidden text-white transition duration-300 ease-out rounded-xl shadow-xl group hover:ring-1 hover:ring-purple-500 bg-gradient-to-br from-[#8767e7] to-[#7209B7] font-semibold ">
            <FontAwesomeIcon icon={faUser} style={{ color: "#fff" }} />
            Profile
          </button>
          {/* Cart Button */}
          <Link
            to="/cart"
            className=" border hidden sm:flex items-center justify-center sm:gap-x-2 gm-gap-x-3 sm:px-2 p-3 px-5 py-2 overflow-hidden text-white transition duration-300 ease-out rounded-xl shadow-xl group hover:ring-1 hover:ring-purple-500 bg-gradient-to-br from-[#8767e7] to-[#7209B7] font-semibold "
          >
            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#fff" }} />
            Cart
            <span className="bg-[#aa6bd4]  rounded-lg px-2">
              {cart.totalQuantity}
            </span>
          </Link>
        </div>
        {/* Mobile Dropdown Menu */}
        <div className="block sm:hidden pr-4">
          <div className="space-y-1 cursor-pointer">
            <div className="bg-purple-600 w-8 h-1 rounded-full"></div>
            <div className="bg-purple-600 w-8 h-1 rounded-full"></div>
            <div className="bg-purple-600 w-8 h-1 rounded-full"></div>

          </div>
        </div>
      </div>
      <MainNavigation />
    </div>
  );
};
export default Header;
