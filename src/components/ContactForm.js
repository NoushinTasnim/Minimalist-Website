import './ContactFormStyles.css';

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactForm = () => {
  return (
    <div className='form'>
      <h1>Contact Us</h1>
      <Formik
        initialValues={{ email: '', message: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.message) {
            errors.message = 'Required Message';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className='dec'>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error" />
            <Field as="textarea" name="message" placeholder="Your message" />
            <ErrorMessage name="message" component="div" className="error" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
