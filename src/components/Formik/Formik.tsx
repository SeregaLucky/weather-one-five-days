import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import styles from './Formik.module.css';
import weatherOperations from '../../redux/weather/weatherOperations';

const validationSchema = yup.object({
  city: yup
    .string()
    .max(50, 'Максимальное 50 символа')
    .required('Поле обезательное к заполнению'),
});

interface IProps {
  findCity: (city: string) => void;
}

interface IPropsFormik {
  errors: {
    city: string;
    num: string;
  };
  touched: {
    city: string;
  };
}

const FormikMy: React.FC<IProps> = ({ findCity }) => (
  <Formik
    initialValues={{ city: '' }}
    onSubmit={(data, { resetForm }) => {
      const { city } = data;

      findCity(city);
      resetForm();
    }}
    validationSchema={validationSchema}
  >
    {({ errors, touched }: IPropsFormik) => (
      <Form className={styles.formWeather}>
        <Field type="text" placeholder="City..." name="city" id={'cityId'} />
        {errors.city && touched.city && (
          <span className={styles.error}>{errors.num}</span>
        )}

        <button type="submit" className={styles.button}>
          Find
        </button>
      </Form>
    )}
  </Formik>
);

const mapDispatchToProps = (dispatch: any) => ({
  findCity: (city: string) =>
    dispatch(weatherOperations.getWeatherOneDayThunk(city)),
});

export default connect(null, mapDispatchToProps)(FormikMy);
