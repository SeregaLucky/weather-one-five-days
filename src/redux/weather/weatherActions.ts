import {
  GET_WEATHER_ONE_START,
  GET_WEATHER_ONE_SECCESS,
  GET_WEATHER_ONE_FAILURE,
  GET_WEATHER_FIVE_START,
  GET_WEATHER_FIVE_SECCESS,
  GET_WEATHER_FIVE_FAILURE
} from "./weatherTypes";
import { ACTypes } from "./weatherTypes";

/* ONE DAY */
const getWeatherOneStartAC = (): ACTypes => ({
  type: GET_WEATHER_ONE_START
});

const getWeatherOneSeccessAC = (weather: object): ACTypes => ({
  type: GET_WEATHER_ONE_SECCESS,
  payload: { weather }
});

const getWeatherOneFailureAC = (error: object): ACTypes => ({
  type: GET_WEATHER_ONE_FAILURE,
  payload: { error }
});

/* FIVE DAYS */
const getWeatherFiveStartAC = (): ACTypes => ({
  type: GET_WEATHER_FIVE_START
});

const getWeatherFiveSeccessAC = (weather: object): ACTypes => ({
  type: GET_WEATHER_FIVE_SECCESS,
  payload: { weather }
});

const getWeatherFiveFailureAC = (error: object): ACTypes => ({
  type: GET_WEATHER_FIVE_FAILURE,
  payload: { error }
});

export default {
  getWeatherOneStartAC,
  getWeatherOneSeccessAC,
  getWeatherOneFailureAC,

  getWeatherFiveStartAC,
  getWeatherFiveSeccessAC,
  getWeatherFiveFailureAC
};
