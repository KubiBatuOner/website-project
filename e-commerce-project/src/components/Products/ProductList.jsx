import ProductCard from "./ProductCard";
import Button from "../UI/Button";
const ProductList = (props) => {
  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-10">
        {props.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {props.curPage <= props.maxPage && (
        <div className="flex gap-2.5 justify-center items-center w-full mb-20 text-[#F72585]">
          {props.curPage !== 1 && <Button onClick={props.onBack}>Back</Button>}
          {props.curPage !== props.maxPage && (
            <Button onClick={props.onNext}>Next</Button>
          )}
        </div>
      )}
    </>
  );
};
export default ProductList;
