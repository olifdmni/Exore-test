import { Link } from "react-router-dom";
import { Product } from "../store/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`/products/${product.id}`} className="no-underline">
      <div className="border border-gray-300 rounded-lg p-4 w-full max-w-xs shadow-md text-center transition-shadow duration-300 mb-5">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto rounded-t-lg"
        />
        <h2 className="text-lg mt-2">{product.title}</h2>
        <p className="text-base text-gray-800">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
