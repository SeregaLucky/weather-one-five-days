import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import weatherT from "./weatherTypes";

const weatherOneDayReducer = createReducer(null, {
  [weatherT.GET_WEATHER_ONE_SECCESS]: (state, { payload }) => payload.weather
});

const weatherFiveDayReducer = createReducer(null, {
  [weatherT.GET_WEATHER_FIVE_SECCESS]: (state, { payload }) => payload.weather
});

const errorReducer = createReducer(null, {
  [weatherT.GET_WEATHER_ONE_START]: () => null,
  [weatherT.GET_WEATHER_FIVE_START]: () => null,

  [weatherT.GET_WEATHER_ONE_FAILURE]: (state, { payload }) => payload.error,
  [weatherT.GET_WEATHER_FIVE_FAILURE]: (state, { payload }) => payload.error
});

export default combineReducers({
  weatherOneDay: weatherOneDayReducer,
  weatherFiveDay: weatherFiveDayReducer,
  error: errorReducer
});
