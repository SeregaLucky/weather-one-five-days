import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./FiveDayPage.module.css";
import weatherS from "../../redux/weather/weatherSelectors";
import weatherOperations from "../../redux/weather/weatherOperations";
import FiveDaysList from "../../components/FiveDaysList/FiveDaysList";

toast.configure();

const FiveDayPage = () => {
  const error = useSelector(state => weatherS.error(state));
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.info("Попробуйте еще раз", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  }, [error]);

  const [city, setCity] = useState("");

  const sendForm = e => {
    e.preventDefault();

    dispatch(weatherOperations.getWeatherFiveDayThunk(city));
    setCity("");
  };

  const onChange = ({ target }) => setCity(target.value);

  return (
    <section className={styles.fiveDay}>
      <div className={styles.container}>
        <h2 className={styles.title}>Weather five days</h2>

        <form onSubmit={sendForm}>
          <input type="text" value={city} onChange={onChange} name="city" />
          <button type="submit">Find</button>
        </form>
      </div>

      <FiveDaysList />
    </section>
  );
};

export default FiveDayPage;
