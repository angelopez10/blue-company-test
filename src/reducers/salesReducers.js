import {
  GET_SALES_FAIL,
  GET_SALES_REQUEST,
  GET_SALES_SUCCESS,
} from "../constants/salesConstants";

export const getSalesDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SALES_REQUEST:
      return {
        loading: true,
      };
    case GET_SALES_SUCCESS:
      return {
        loading: false,
        success: true,
        salesData: action.payload,
      };
    case GET_SALES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
