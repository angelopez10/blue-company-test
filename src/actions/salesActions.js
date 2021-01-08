import {
  GET_SALES_FAIL,
  GET_SALES_REQUEST,
  GET_SALES_SUCCESS,
} from "../constants/salesConstants";
import data from "../dummy-data.json";

export const getSalesData = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_SALES_REQUEST,
    });

    const result = data.salesTable;

    dispatch({
      type: GET_SALES_SUCCESS,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: GET_SALES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
