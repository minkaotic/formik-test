import React from 'react';
import { Formik } from "formik";
import { TextField, Button } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div>
      <Formik
        initialValues={{ firstName: "" }}
        onSubmit={(data, { setSubmitting }) => {
          // set submitting to true to disable submit button
          setSubmitting(true);
          // make async call
          setTimeout(() => {
            console.log(data);
          }, 2000);
          // set submitting to false again
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div>
              <Button
                type="submit"
                disabled={isSubmitting}
              >Submit</Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
