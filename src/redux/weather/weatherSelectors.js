const getOneDayWeather = state => state.weather.weatherOneDay;
const getFiveDayWeather = state => state.weather.weatherFiveDay;
const error = state => state.weather.error;

export default { getOneDayWeather, getFiveDayWeather, error };
