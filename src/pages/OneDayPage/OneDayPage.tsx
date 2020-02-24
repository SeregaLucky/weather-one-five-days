import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./OneDayPage.module.css";
import weatherSelectors from "../../redux/weather/weatherSelectors";
import FormikMy from "../../components/Formik/Formik";
import { AppStateType } from "../../redux/rootReducer";

toast.configure();

interface IWeather {
  name: string;
  main: { temp: number; feels_like: number };
  clouds: { all: number };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
  wind: { speed: number };
}

interface IProps {
  error: null | object;
  weather: null | IWeather;
}

class OneDayPage extends Component<IProps> {
  componentDidUpdate() {
    const { error } = this.props;
    if (error) this.notify();
  }

  notify = (): void => {
    toast.info("Попробуйте еще раз", {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  };

  render() {
    const { weather } = this.props;

    return (
      <section className={styles.oneDay}>
        <div className={styles.container}>
          <h2 className={styles.title}>Weather one day</h2>
          <div className={styles.formCont}>
            <FormikMy />
          </div>

          {weather && (
            <div>
              <p>City: {weather.name}</p>
              <p>
                Temp:
                {Math.floor(weather.main.temp)} or{" "}
                {Math.ceil(weather.main.temp)}
              </p>
              <p>
                Feels like:
                {Math.floor(weather.main.feels_like)} or{" "}
                {Math.ceil(weather.main.feels_like)}
              </p>
              <p>Cloud: {weather.clouds.all}%</p>
              <p>Cloud: {weather.weather[0].description}</p>
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt=""
              />
              <p>Wind speed: {weather.wind.speed}</p>
            </div>
          )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state: AppStateType): object => ({
  weather: weatherSelectors.getOneDayWeather(state),
  error: weatherSelectors.error(state)
});

export default connect(mapStateToProps)(OneDayPage);
