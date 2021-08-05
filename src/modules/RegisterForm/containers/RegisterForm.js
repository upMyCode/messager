import RegisterForm from '../components/RegisterForm'
import { withFormik } from 'formik'

export default withFormik({
    validate: values => {
      const errors = {};
  
      if (!values.email) {
        errors.name = 'Required';
      } else if (
          !/^[A-Z0-9._%+-]+[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
          errors.email = 'Invalid email adress'
      }
      return errors;
    },
  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
    displayName: 'RegisterForm',
  })(RegisterForm);