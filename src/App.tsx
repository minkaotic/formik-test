import React from 'react';
import { Formik, Field, Form } from "formik";
import { TextField, Button, Checkbox } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div className="form-container">
      <h1>Formik form</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          isTall: false,
          cookies: [],
          fruits: ""
        }}
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
            <h2>Basic stuff</h2>
            <Field name="firstName" label="First name" type="input" as={TextField} />
            <Field name="lastName" label="Last name" type="input" as={TextField} />
            <span>Is tall?</span>
            <Field name="isTall" label="Is tall" type="checkbox" as={Checkbox} />

            <h2>Cookies</h2>
            <span>Choc chip</span>
            <Field name="cookies" type="checkbox" value="choc chip" as={Checkbox} />
            <span>Lemon polenta</span>
            <Field name="cookies" type="checkbox" value="lemon polenta" as={Checkbox} />
            <span>Viennese</span>
            <Field name="cookies" type="checkbox" value="viennese" as={Checkbox} />

            <h2>Fruits</h2>
            <span>Orange</span>
            <Field name="fruits" type="radio" value="orange" className="radio-input" />
            <span>Banana</span>
            <Field name="fruits" type="radio" value="banana" className="radio-input" />
            <span>Lychee</span>
            <Field name="fruits" type="radio" value="lychee" className="radio-input" />

            <Button
              variant="contained"
              type="submit"
              disabled={isSubmitting}
            >Submit</Button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
