import React from 'react';
import { Formik, Field, Form } from "formik";
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
        {({ values, isSubmitting }) => (
          <Form>
            <div>
              <Field
                name="firstName"
                type="input"
                as={TextField} />
            </div>
            <div>
              <Field
                name="lastName"
                type="input"
                as={TextField} />
            </div>
            <div>
              <Button
                type="submit"
                disabled={isSubmitting}
              >Submit</Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
