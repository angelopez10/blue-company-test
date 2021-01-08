import {
  GET_FAVORITE_PRODUCTS_FAIL,
  GET_FAVORITE_PRODUCTS_REQUEST,
  GET_FAVORITE_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "../constants/favoritesConstants";

export const getProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        loading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        success: true,
        productsData: action.payload,
      };
    case GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getFavoritesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_FAVORITE_PRODUCTS_REQUEST:
      return {
        loading: true,
      };
    case GET_FAVORITE_PRODUCTS_SUCCESS:
      return {
        loading: false,
        success: true,
        favoritesData: action.payload,
      };
    case GET_FAVORITE_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
