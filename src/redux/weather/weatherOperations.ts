import api from "../../servises/api";
import weatherActions from "./weatherActions";

const getWeatherOneDayThunk = (city: string) => (dispatch: any) => {
  dispatch(weatherActions.getWeatherOneStartAC());

  api
    .getOneDayWeather(city)
    .then(data => dispatch(weatherActions.getWeatherOneSeccessAC(data)))
    .catch(error => dispatch(weatherActions.getWeatherOneFailureAC(error)));
};

const getWeatherFiveDayThunk = (city: string) => (dispatch: any) => {
  dispatch(weatherActions.getWeatherFiveStartAC());

  api
    .getFiveDayWeather(city)
    .then(data => dispatch(weatherActions.getWeatherFiveSeccessAC(data)))
    .catch(error => dispatch(weatherActions.getWeatherFiveFailureAC(error)));
};

export default { getWeatherOneDayThunk, getWeatherFiveDayThunk };