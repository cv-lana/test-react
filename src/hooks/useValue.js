import { useFormik } from 'formik';

export const useValue = (props) => {
  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 25) {
      errors.name = 'Must be 25 characters or less';
    }

    if (!values.name) {
      errors.username = 'Required';
    } else if (values.username.length > 16) {
      errors.username = 'Must be 16 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.street) {
      errors.street = 'Required';
    } else if (values.street.length > 20) {
      errors.street = 'Must be 20 characters or less';
    }

    if (!values.city) {
      errors.city = 'Required';
    } else if (values.city.length > 16) {
      errors.city = 'Must be 16 characters or less';
    }

    if (!values.zipcode) {
      errors.zipcode = 'Required';
    } else if (!/^\d{5}(?:[-\s]\d{4})?$/.test(values.zipcode)) {
      errors.zipcode = 'Invalid zip code';
    }

    if (!values.phone) {
      errors.phone = 'Required';
    } else if (!/^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d[- .]?(\D\d+)?$/.test(values.phone)) {
      errors.phone = 'Invalid phone number';
    }

    if (!values.website) {
      errors.website = 'Required';
    } else if (!/^(https?:\/\/)?([\da-z-.]+)\.([a-z]{2,6})$/.test(values.website)) {
      errors.website = 'Invalid website address';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: props ? props.name : '',
      username: props ? props.username : '',
      email: props ? props.email : '',
      street: props ? props.address.street : '',
      city: props ? props.address.city : '',
      zipcode: props ? props.address.zipcode : '',
      phone: props ? props.phone : '',
      website: props ? `http://${props.website}` : '',
      comment: ''
    },
    validate,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    }
  });

  return { formik };
};