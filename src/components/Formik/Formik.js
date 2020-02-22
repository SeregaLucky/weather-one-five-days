import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import styles from "./Formik.module.css";
import weatherOperations from "../../redux/weather/weatherOperations";

const validationSchema = yup.object({
  city: yup
    .string()
    .max(50, "Максимальное 50 символа")
    .required("Поле обезательное к заполнению")
});

const FormikMy = ({ findCity }) => {
  return (
    <Formik
      initialValues={{ city: "" }}
      onSubmit={(data, { resetForm }) => {
        const { city } = data;

        findCity(city);
        resetForm();
      }}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <label htmlFor={"cityId"}>
            <span>Write need city</span>
            <Field
              type="text"
              placeholder="City..."
              name="city"
              id={"cityId"}
            />
            {errors.password && touched.password && (
              <span className={styles.error}>{errors.num}</span>
            )}
          </label>

          <button type="submit" className={styles.button}>
            Find
          </button>
        </Form>
      )}
    </Formik>
  );
};

const mapDispatchToProps = dispatch => ({
  findCity: city => dispatch(weatherOperations.getWeatherOneDayThunk(city))
});

// export default FormikMy;
export default connect(null, mapDispatchToProps)(FormikMy);
