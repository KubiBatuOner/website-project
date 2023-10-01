import { useParams } from "react-router-dom";
import { useFetch } from "../utils/util";
import { useEffect, useState } from "react";
import ProductDetailComp from "../components/Products/ProductDetailComp";
import Loading from "../components/UI/Loading";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    fetch("https://dummyjson.com/products/" + productId)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIsFetching(false);
      });
  }, []);

  return (
    <div className="flex justify-center pt-20">
      {isFetching && <Loading />}
      {!isFetching && product && <ProductDetailComp product={product} />}
    </div>
  );
};
export default ProductDetails;
