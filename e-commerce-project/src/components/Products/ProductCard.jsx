import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

import Button from "../UI/Button";
const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className=" flex flex-col border rounded-md p-6 cursor-pointer"
    >
      <Link to={`/${product.category}/${product.id}`}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
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
        <Button className="w-full hover:bg-gray-400 hover:text-white">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
