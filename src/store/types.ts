import { Action } from "redux";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  product?: Product;
}

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";
export const ADD_PRODUCT_REQUEST = "ADD_PRODUCT_REQUEST";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";

interface FetchProductsRequestAction
  extends Action<typeof FETCH_PRODUCTS_REQUEST> {}
interface FetchProductsSuccessAction
  extends Action<typeof FETCH_PRODUCTS_SUCCESS> {
  payload: Product[];
}
interface FetchProductsFailureAction
  extends Action<typeof FETCH_PRODUCTS_FAILURE> {
  payload: string;
}

interface FetchProductRequestAction
  extends Action<typeof FETCH_PRODUCT_REQUEST> {}
interface FetchProductSuccessAction
  extends Action<typeof FETCH_PRODUCT_SUCCESS> {
  payload: Product;
}
interface FetchProductFailureAction
  extends Action<typeof FETCH_PRODUCT_FAILURE> {
  payload: string;
}

interface AddProductRequestAction extends Action<typeof ADD_PRODUCT_REQUEST> {}
interface AddProductSuccessAction extends Action<typeof ADD_PRODUCT_SUCCESS> {
  payload: Product;
}
interface AddProductFailureAction extends Action<typeof ADD_PRODUCT_FAILURE> {
  payload: string;
}

export type ProductsAction =
  // Действия для получения всех продуктов
  | FetchProductsRequestAction
  | FetchProductsSuccessAction
  | FetchProductsFailureAction
  // Действия для получения одного продукта по id
  | FetchProductRequestAction
  | FetchProductSuccessAction
  | FetchProductFailureAction
  // Действия для добавления продукта
  | AddProductRequestAction
  | AddProductSuccessAction
  | AddProductFailureAction;
