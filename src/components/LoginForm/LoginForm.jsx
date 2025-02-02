import css from './LoginForm.module.css';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(login(values))
      .unwrap()
      .catch(() => {
        toast.error('Invalid email or password');
      });
    options.resetForm();
  };
  const initialValues = {
    email: '',
    password: '',
  };

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div className={css.wrapper}>
      <h2 className={css.formLoginTitle}>Login</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={css.form}>
          <Field className={css.text} name="email" placeholder="Enter email" />
          <Field
            className={css.text}
            name="password"
            type="password"
            placeholder="Enter pass"
          />
          <button className={css.btn} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
