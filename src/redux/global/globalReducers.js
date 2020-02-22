import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import weatherT from "../weather/weatherTypes";

const loadingReducer = createReducer(false, {
  [weatherT.GET_WEATHER_ONE_START]: () => true,
  [weatherT.GET_WEATHER_FIVE_START]: () => true,

  [weatherT.GET_WEATHER_ONE_SECCESS]: () => false,
  [weatherT.GET_WEATHER_ONE_FAILURE]: () => false,
  [weatherT.GET_WEATHER_FIVE_SECCESS]: () => false,
  [weatherT.GET_WEATHER_FIVE_FAILURE]: () => false
});

export default combineReducers({
  loading: loadingReducer
});
