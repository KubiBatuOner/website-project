import { Rating } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Button from "../UI/Button";
const getStockQuantity = (stock) => {
  let options = [];
  for (let i = 1; i <= stock; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return options;
};
const ProductDetailComp = ({ product }) => {
  console.log(product);
  return (
    <div className="grid gap-10 grid-cols-1fr lg:grid-cols-[3fr_2fr] mx-40 mb-20 ">
      <div className="justify-self-center ">
        <Carousel>
          {product.images.map((image) => (
            <div>
              <img className="max-w-xs" src={image} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="p-10 bg-slate-200 rounded self-start">
        <h2 className="text-2xl font-bold color-gray-500">{product.title}</h2>
        <p className="text-gray-500">{product.brand}</p>
        <div className="flex justify-between mt-4">
          <p className="text-xl font-bold color-gray-500">${product.price}</p>
          <div className="flex items-end gap-1.5 text-gray-500 text-sm mt-1">
            <Rating
              size={20}
              readonly
              allowFraction={true}
              initialValue={product.rating}
            />
            <span>{product.rating}</span>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold">About this item</h3>
          <p className="text-gray-500 text-md">{product.description}</p>
        </div>
        <div className="flex items-center gap-2.5 mt-10">
          <select
            className="bg-white cursor-pointer rounded py-3 pl-2.5 pr-0 text-align-right   "
            name="quantity"
            id="quantity"
          >
            {getStockQuantity(product.stock)}
          </select>

          <Button className=" flex items-center justify-center gap-2.5  w-full  bg-gray-600 text-white hover:bg-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#fff" }} />
            <span>Add to Cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailComp;
