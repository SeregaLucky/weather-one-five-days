import { combineReducers } from "redux";
import weatherReducers from "./weather/weatherReducers";
import globalReducers from "./global/globalReducers";

export default combineReducers({
  weather: weatherReducers,
  global: globalReducers
});
