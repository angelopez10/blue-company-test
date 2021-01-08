import {
  GET_FAVORITE_PRODUCTS_FAIL,
  GET_FAVORITE_PRODUCTS_REQUEST,
  GET_FAVORITE_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "../constants/favoritesConstants";
import data from "../dummy-data.json";

export const getProductsData = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_PRODUCTS_REQUEST,
    });

    const result = data.favoritesList.filter(
      (item) => item.isFavorite === false
    );

    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getFavoritesData = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_FAVORITE_PRODUCTS_REQUEST,
    });

    const result = data.favoritesList.filter(
      (item) => item.isFavorite !== false
    );

    dispatch({
      type: GET_FAVORITE_PRODUCTS_SUCCESS,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: GET_FAVORITE_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
