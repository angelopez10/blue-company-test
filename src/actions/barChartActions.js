import {
  GET_BARCHART_FAIL,
  GET_BARCHART_REQUEST,
  GET_BARCHART_SUCCESS,
} from "../constants/barChartConstants";
import data from "../dummy-data.json";

export const getBarChartData = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_BARCHART_REQUEST,
    });

    const result = data.barChart;

    dispatch({
      type: GET_BARCHART_SUCCESS,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: GET_BARCHART_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
