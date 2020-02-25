import { combineReducers } from 'redux';
import weatherReducers from './weather/weatherReducers';
import globalReducers from './global/globalReducers';

const rootReducer = combineReducers({
  weather: weatherReducers,
  global: globalReducers,
});

type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>;

export default rootReducer;
