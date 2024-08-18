import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/productActions";
import ProductCard from "../components/ProductCard";
import { AppDispatch, AppState } from "../store";
import { Product } from "../store/types";

const ProductsPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: AppState) => state.products
  );

  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<"price" | "title" | "category">(
    "price"
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    dispatch(fetchProducts(8)); // Начальная загрузка 8 продуктов
  }, [dispatch]);

  const loadProducts = (count: number) => {
    dispatch(fetchProducts(count));
  };

  const filteredProducts = products
    .filter((product: Product) => {
      const matchesSearch = Object.values(product).some((value) =>
        value.toString().toLowerCase().includes(search.toLowerCase())
      );
      return matchesSearch;
    })
    .sort((a, b) => {
      const aValue =
        sortField === "price" ? a.price : a[sortField].toString().toLowerCase();
      const bValue =
        sortField === "price" ? b.price : b[sortField].toString().toLowerCase();

      if (sortOrder === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

  if (loading) {
    return <p className="text-center">Загрузка...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">Ошибка: {error}</p>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => loadProducts(8)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          8 продуктов
        </button>
        <button
          onClick={() => loadProducts(16)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          16 продуктов
        </button>
        <button
          onClick={() => loadProducts(20)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          20 продуктов
        </button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Поиск по всем полям"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 w-full"
        />
        <div className="flex space-x-2 mt-2">
          <select
            value={sortField}
            onChange={(e) =>
              setSortField(e.target.value as "price" | "title" | "category")
            }
            className="border p-2 w-full"
          >
            <option value="price">Сортировка по цене</option>
            <option value="title">Сортировка по названию</option>
            <option value="category">Сортировка по категории</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
            className="border p-2 w-full"
          >
            <option value="asc">По возрастанию</option>
            <option value="desc">По убыванию</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredProducts.length === 0 ? (
          <p>Нет продуктов для отображения.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
