import { AppStateType } from "../rootReducer";

const getOneDayWeather = (state: AppStateType) => state.weather.weatherOneDay;
const getFiveDayWeather = (state: AppStateType) => state.weather.weatherFiveDay;
const error = (state: AppStateType) => state.weather.error;

export default { getOneDayWeather, getFiveDayWeather, error };
