export const GET_WEATHER_ONE_START = 'weather/GET_WEATHER_ONE_START';
export const GET_WEATHER_ONE_SECCESS = 'weather/GET_WEATHER_ONE_SECCESS';
export const GET_WEATHER_ONE_FAILURE = 'weather/GET_WEATHER_ONE_FAILURE';

export const GET_WEATHER_FIVE_START = 'weather/GET_WEATHER_FIVE_START';
export const GET_WEATHER_FIVE_SECCESS = 'weather/GET_WEATHER_FIVE_SECCESS';
export const GET_WEATHER_FIVE_FAILURE = 'weather/GET_WEATHER_FIVE_FAILURE';

interface getWeatherOneStartAC {
  type: typeof GET_WEATHER_ONE_START;
}
interface getWeatherOneSeccessAC {
  type: typeof GET_WEATHER_ONE_SECCESS;
  payload: { weather: {} };
}
interface getWeatherOneFailureAC {
  type: typeof GET_WEATHER_ONE_FAILURE;
  payload: { error: {} };
}

interface getWeatherFiveStartAC {
  type: typeof GET_WEATHER_FIVE_START;
}
interface getWeatherFiveSeccessAC {
  type: typeof GET_WEATHER_FIVE_SECCESS;
  payload: { weather: {} };
}
interface getWeatherFiveFailureAC {
  type: typeof GET_WEATHER_FIVE_FAILURE;
  payload: { error: {} };
}

export type ACTypes =
  | getWeatherOneStartAC
  | getWeatherOneSeccessAC
  | getWeatherOneFailureAC
  | getWeatherFiveStartAC
  | getWeatherFiveSeccessAC
  | getWeatherFiveFailureAC;
