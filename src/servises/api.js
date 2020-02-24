import axios from 'axios';

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5';
const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';

const getOneDayWeather = async city => {
  const res = await axios.get(
    `/weather?q=${city},ua&units=metric&mode=json&appid=${openWeatherApiKey}`,
  );

  return res.data;
};

const getFiveDayWeather = async city => {
  const res = await axios.get(
    `/forecast?q=${city},ua&units=metric&mode=json&appid=${openWeatherApiKey}`,
  );

  return res.data;
};

export default { getOneDayWeather, getFiveDayWeather };
