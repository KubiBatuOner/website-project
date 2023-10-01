import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../logo.svg";
import MainNavigation from "./MainNavigation";
const Header = () => {
  return (
    <div className="flex flex-col gap-y-10 shadow-lg py-5 px-28">
      <div className="flex justify-around items-center pt-6">
        <div className="w-12 ">
          <img className="w-full" src={Logo} alt="logo" />
        </div>
        <div className="flex justify-between items-center border border-gray-400 w-1/2 rounded-md">
          <div className="flex justify-center items-center py-2">
            <div className="px-2">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#d8dee4" }}
              />
            </div>
            <div>
              <input
                type="text"
                className="pl-4 pr-2 w-full rounded-full focus:outline-none"
              />
            </div>
          </div>
          <div>

            <button className="bg-[#8767e7] bg-opacity-70 hover:bg-[#a78bfa] text-white rounded-r p-2 font-semibold">

              Search
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center gap-x-4">

          <button className="py-2 px-4x border relative gap-x-3 inline-flex items-center justify-center p-4 px-5 overflow-hidden text-white transition duration-300 ease-out rounded-xl shadow-xl group hover:ring-1 hover:ring-purple-500 bg-gradient-to-br from-[#8767e7] to-[#7209B7] font-semibold">
            <FontAwesomeIcon icon={faUser} style={{ color: "#8490a9" }} />
            Profile
          </button>
          <button className=" border flex items-center justify-center gap-x-3 p-4 px-5 py-2 overflow-hidden text-white transition duration-300 ease-out rounded-xl shadow-xl group hover:ring-1 hover:ring-purple-500 bg-gradient-to-br from-[#8767e7] to-[#7209B7] font-semibold">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#8490a9" }}
            />

         

            Cart
            <span className="bg-slate-500  rounded-lg px-2">0</span>
          </button>
        </div>
      </div>
      <MainNavigation />
    </div>
  );
};
export default Header;
