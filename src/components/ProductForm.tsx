import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/actions/productActions";
import { AppDispatch } from "../store";
import { Product } from "../store/types";

const ProductForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [productData, setProductData] = useState<
    Omit<Product, "id" | "description" | "category" | "rating">
  >({
    title: "",
    price: 0,
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: name === "price" ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      addProduct({
        ...productData,
        description: "Описание продукта",
        category: "Категория",
        rating: { rate: 0, count: 0 },
      })
    );
    setProductData({ title: "", price: 0, image: "" }); // Сброс формы
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Добавить продукт</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="title"
          >
            Название:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={productData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="price"
          >
            Цена:
          </label>
          <input
            type="number"
            name="price"
            id="price"
            value={productData.price}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="image"
          >
            URL изображения:
          </label>
          <input
            type="text"
            name="image"
            id="image"
            value={productData.image}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Добавить продукт
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
