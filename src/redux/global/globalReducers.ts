import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  GET_WEATHER_ONE_START,
  GET_WEATHER_FIVE_START,
  GET_WEATHER_ONE_SECCESS,
  GET_WEATHER_ONE_FAILURE,
  GET_WEATHER_FIVE_SECCESS,
  GET_WEATHER_FIVE_FAILURE,
} from '../weather/weatherTypes';

const loadingReducer = createReducer(false, {
  [GET_WEATHER_ONE_START]: (): boolean => true,
  [GET_WEATHER_FIVE_START]: (): boolean => true,

  [GET_WEATHER_ONE_SECCESS]: (): boolean => false,
  [GET_WEATHER_ONE_FAILURE]: (): boolean => false,
  [GET_WEATHER_FIVE_SECCESS]: (): boolean => false,
  [GET_WEATHER_FIVE_FAILURE]: (): boolean => false,
});

export default combineReducers({
  loading: loadingReducer,
});
