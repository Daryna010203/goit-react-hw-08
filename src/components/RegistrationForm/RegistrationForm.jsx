import css from './RegistrationForm.module.css';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then(res => {
        toast(`Welcome ${res?.user?.name}`);
        navigate('/contacts');
      })
      .catch(() => {
        toast.error('Спробуй ще раз');
      });
    options.resetForm();
  };
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  return (
    <div className={css.wrapper}>
      <h2>Register</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={css.form}>
          <Field className={css.text} name="name" placeholder="Enter name" />
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
export default RegisterForm;
