import axios from 'axios';

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5';
const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';

interface IDataOneDay {
  name: string;
  main: { temp: number; feels_like: number };
  clouds: { all: number };
  weather: [
    {
      description: string;
      icon: string;
    },
  ];
  wind: { speed: number };
}

const getOneDayWeather = async (city: string) => {
  const res = await axios.get<IDataOneDay>(
    `/weather?q=${city},ua&units=metric&mode=json&appid=${openWeatherApiKey}`,
  );

  return res.data;
};

const getFiveDayWeather = async (city: string) => {
  const res = await axios.get<object>(
    `/forecast?q=${city},ua&units=metric&mode=json&appid=${openWeatherApiKey}`,
  );

  return res.data;
};

export default { getOneDayWeather, getFiveDayWeather };
