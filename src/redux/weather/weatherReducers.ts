import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  GET_WEATHER_ONE_START,
  GET_WEATHER_ONE_SECCESS,
  GET_WEATHER_ONE_FAILURE,
  GET_WEATHER_FIVE_START,
  GET_WEATHER_FIVE_SECCESS,
  GET_WEATHER_FIVE_FAILURE,
} from './weatherTypes';

const weatherOneDayReducer = createReducer(null, {
  [GET_WEATHER_ONE_SECCESS]: (state, { payload }) => payload.weather,
});

const weatherFiveDayReducer = createReducer(null, {
  [GET_WEATHER_FIVE_SECCESS]: (state, { payload }) => payload.weather,
});

const errorReducer = createReducer(null, {
  [GET_WEATHER_ONE_START]: (): null => null,
  [GET_WEATHER_FIVE_START]: (): null => null,

  [GET_WEATHER_ONE_FAILURE]: (state, { payload }) => payload.error,
  [GET_WEATHER_FIVE_FAILURE]: (state, { payload }) => payload.error,
});

export default combineReducers({
  weatherOneDay: weatherOneDayReducer,
  weatherFiveDay: weatherFiveDayReducer,
  error: errorReducer,
});
