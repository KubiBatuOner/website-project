import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

import Button from "../UI/Button";
const ProductCard = ({ product }) => {
  return (

    

    <div
      key={product.id}
      className=" flex flex-col border border-1 rounded-md p-6 cursor-pointer  hover:border-purple-500 hover:shadow-2xl"
    >
      <Link to={`/${product.category}/${product.id}`}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 transform transition duration-500 hover:scale-110  lg:h-80">

          <img
            className="h-full w-full object-scale-down object-center lg:h-full lg:w-full "
            src={product.thumbnail}
            alt={product.title}
          />
        </div>

       

        <div className="mt-4">
          <h3 className="text-sm text-gray-700">{product.title}</h3>
          <p className=" text-sm text-gray-500">{product.brand}</p>

        </div>

        <div className="flex items-end gap-1.5 text-gray-500 text-sm mt-1">
          <Rating
            size={20}
            readonly
            allowFraction={true}
            initialValue={product.rating}
          />
          <span>{product.rating}</span>
        </div>

        

        <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
          ${product.price}
        </p>
      </Link>
      <div className="mt-auto w-full">
        <Button className="flex items-center justify-center bg-[#4361EE] font-semibold py-3 text-sm text-white gap-2.5 w-full hover:bg-green-600 hover:text-white">
          <FontAwesomeIcon icon={faCartShopping} style={{ color: "#fff" }} />
          <span>Add to Cart</span>
        </Button>
>>>>>>> dev
      </div>
    </div>
  );
};

export default ProductCard;
