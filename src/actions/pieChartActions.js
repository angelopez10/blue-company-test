import {
  GET_PIECHART_FAIL,
  GET_PIECHART_REQUEST,
  GET_PIECHART_SUCCESS,
} from "../constants/pieChartConstants";
import data from "../dummy-data.json";

export const getPieChartData = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_PIECHART_REQUEST,
    });

    const result = data.pieChart;

    dispatch({
      type: GET_PIECHART_SUCCESS,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: GET_PIECHART_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
