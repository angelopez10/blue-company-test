import {
  GET_PIECHART_FAIL,
  GET_PIECHART_REQUEST,
  GET_PIECHART_SUCCESS,
} from "../constants/pieChartConstants";

export const getPieChartDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PIECHART_REQUEST:
      return {
        loading: true,
      };
    case GET_PIECHART_SUCCESS:
      return {
        loading: false,
        success: true,
        pieChartData: action.payload,
      };
    case GET_PIECHART_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
