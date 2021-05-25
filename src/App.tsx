import React from 'react';
import { Formik, Field } from "formik";
import { TextField, Button } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div>
      <Formik
        initialValues={{ firstName: "", lastName: "" }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          // make async call
          setTimeout(() => {
            console.log(data);
          }, 2000);
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="firstName" type="input" as={TextField} />
            <Field name="lastName" type="input" as={TextField} />
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
