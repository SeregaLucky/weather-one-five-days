import React from 'react';
import { useSelector } from 'react-redux';
import styles from './FiveDaysList.module.css';
import weatherS from '../../redux/weather/weatherSelectors';
import { AppStateType } from '../../redux/rootReducer';

interface IItem {
  dt: number;
  dt_txt: string;
  main: { temp: number };
}

type Weather = null | any;

const FiveDaysList: React.FC = () => {
  const weather: Weather = useSelector((state: AppStateType) =>
    weatherS.getFiveDayWeather(state),
  );

  return (
    weather && (
      <>
        <h2 className={styles.title}>{weather.city.name}</h2>

        <ul className={styles.list}>
          {weather.list.map((item: IItem) => (
            <li key={item.dt} className={styles.item}>
              <p>Date and time: {item.dt_txt}</p>
              <p>Temp: {Math.round(item.main.temp)}</p>
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export default FiveDaysList;
