import {
  Product,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
} from "../types";
import { AppDispatch } from "..";

const API_URL = "https://fakestoreapi.com/products";

// Получение лимитированного кол-ва продуктов
export const fetchProducts =
  (limit: number) => async (dispatch: AppDispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
      const response = await fetch(`${API_URL}?limit=${limit}`);
      const data = await response.json();
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
    }
  };

// Получение продукта по ID
export const fetchProductById =
  (id: string) => async (dispatch: AppDispatch) => {
    dispatch({ type: FETCH_PRODUCT_REQUEST });
    try {
      const response = await fetch(`${API_URL}/${id}`);
      const data = await response.json();
      dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({ type: FETCH_PRODUCT_FAILURE, payload: error.message });
    }
  };

// Добавление нового продукта
export const addProduct =
  (productData: Omit<Product, "id">) => async (dispatch: AppDispatch) => {
    dispatch({ type: ADD_PRODUCT_REQUEST });
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      const data = await response.json();
      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({ type: ADD_PRODUCT_FAILURE, payload: error.message });
    }
  };
