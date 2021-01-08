import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getBarChartDataReducer } from "./reducers/barChartReducers";
import { getPieChartDataReducer } from "./reducers/pieChartReducers";
import { getSalesDataReducer } from "./reducers/salesReducers";
import {
  getFavoritesReducer,
  getProductsReducer,
} from "./reducers/favoritesReducers";

const reducer = combineReducers({
  barChart: getBarChartDataReducer,
  pieChart: getPieChartDataReducer,
  sales: getSalesDataReducer,
  products: getProductsReducer,
  favorites: getFavoritesReducer,
});

const initialState = {
  barChart: {},
  pieChart: {},
  sales: {},
  products: {},
  favorites: {},
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
