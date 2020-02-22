import React from "react";
import { useSelector } from "react-redux";
import styles from "./FiveDaysList.module.css";
import weatherS from "../../redux/weather/weatherSelectors";

const FiveDaysList = () => {
  const weather = useSelector(state => weatherS.getFiveDayWeather(state));

  return (
    weather && (
      <>
        <h2>{weather.city.name}</h2>

        <ul className={styles.list}>
          {weather.list.map(item => (
            <li key={item.dt}>
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
