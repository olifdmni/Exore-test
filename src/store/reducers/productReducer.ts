import {
  ProductsState,
  ProductsAction,
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

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  product: undefined, // добавлено для хранения одного продукта
};

const productReducer = (
  state = initialState,
  action: ProductsAction
): ProductsState => {
  switch (action.type) {
    // Действия для получения всех продуктов
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // Действия для получения одного продукта
    case FETCH_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCT_SUCCESS:
      return { ...state, loading: false, product: action.payload }; // сохраняем загруженный продукт
    case FETCH_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // Действия для добавления продукта
    case ADD_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload], // добавление нового продукта в массив
      };
    case ADD_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default productReducer;
