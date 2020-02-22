import weatherT from "./weatherTypes";

/* ONE DAY */
const getWeatherOneStartAC = () => ({
  type: weatherT.GET_WEATHER_ONE_START
});

const getWeatherOneSeccessAC = weather => ({
  type: weatherT.GET_WEATHER_ONE_SECCESS,
  payload: { weather }
});

const getWeatherOneFailureAC = error => ({
  type: weatherT.GET_WEATHER_ONE_FAILURE,
  payload: { error }
});

/* FIVE DAYS */
const getWeatherFiveStartAC = () => ({
  type: weatherT.GET_WEATHER_FIVE_START
});

const getWeatherFiveSeccessAC = weather => ({
  type: weatherT.GET_WEATHER_FIVE_SECCESS,
  payload: { weather }
});

const getWeatherFiveFailureAC = error => ({
  type: weatherT.GET_WEATHER_FIVE_FAILURE,
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
