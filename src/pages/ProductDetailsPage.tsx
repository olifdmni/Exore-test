import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../store/actions/productActions";
import { useParams } from "react-router-dom";
import { AppDispatch, AppState } from "../store";

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state: AppState) => state.products
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">Error: {error}</p>;

  if (!product) return <p className="text-center">Product not found</p>;

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        className="w-48 h-auto mx-auto mb-4"
      />
      <p className="text-lg mb-2">
        Цена: <span className="font-semibold">${product.price}</span>
      </p>
      <p className="mb-2">Описание: {product.description}</p>
      <p className="mb-2">Категория: {product.category}</p>
      <p>
        Рейтинг: <span className="font-semibold">{product.rating.rate}</span>
        (Всего: {product.rating.count})
      </p>
    </div>
  );
};

export default ProductDetailsPage;
