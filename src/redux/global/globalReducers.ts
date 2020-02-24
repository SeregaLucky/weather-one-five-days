import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import weatherT from "../weather/weatherTypes";

const loadingReducer = createReducer(false, {
  [weatherT.GET_WEATHER_ONE_START]: (): boolean => true,
  [weatherT.GET_WEATHER_FIVE_START]: (): boolean => true,

  [weatherT.GET_WEATHER_ONE_SECCESS]: (): boolean => false,
  [weatherT.GET_WEATHER_ONE_FAILURE]: (): boolean => false,
  [weatherT.GET_WEATHER_FIVE_SECCESS]: (): boolean => false,
  [weatherT.GET_WEATHER_FIVE_FAILURE]: (): boolean => false
});

export default combineReducers({
  loading: loadingReducer
});
