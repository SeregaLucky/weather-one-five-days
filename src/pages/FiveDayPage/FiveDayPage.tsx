import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./FiveDayPage.module.css";
import { AppStateType } from "../../redux/rootReducer";
import weatherS from "../../redux/weather/weatherSelectors";
import weatherOperations from "../../redux/weather/weatherOperations";
import FiveDaysList from "../../components/FiveDaysList/FiveDaysList";

toast.configure();

const FiveDayPage: React.FC = () => {
  const error: null | object = useSelector((state: AppStateType) =>
    weatherS.error(state)
  );
  const dispatch = useDispatch();

  useEffect((): void => {
    if (error) {
      toast.info("Попробуйте еще раз", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  }, [error]);

  const [city, setCity] = useState<string>("");

  const sendForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch(weatherOperations.getWeatherFiveDayThunk(city));
    setCity("");
  };

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void =>
    setCity(target.value);

  return (
    <section className={styles.fiveDay}>
      <div className={styles.container}>
        <h2 className={styles.title}>Weather five days</h2>

        <div className={styles.formCont}>
          <form onSubmit={sendForm} className={styles.formWeather}>
            <input
              type="text"
              value={city}
              onChange={onChange}
              name="city"
              placeholder="City..."
            />
            <button type="submit">Find</button>
          </form>
        </div>

        <FiveDaysList />
      </div>
    </section>
  );
};

export default FiveDayPage;
