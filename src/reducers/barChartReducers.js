import {
  GET_BARCHART_FAIL,
  GET_BARCHART_REQUEST,
  GET_BARCHART_SUCCESS,
} from "../constants/barChartConstants";

export const getBarChartDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BARCHART_REQUEST:
      return {
        loading: true,
      };
    case GET_BARCHART_SUCCESS:
      return {
        loading: false,
        success: true,
        barChartData: action.payload,
      };
    case GET_BARCHART_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
