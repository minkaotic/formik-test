import React from 'react';
import { Formik } from "formik";
import { TextField } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div>
      {/* formik component using render prop syntax
      formik component requires two props:
      initial values of the form, and onSubmit function */}
      <Formik
        initialValues={{ firstName: "bob" }}
        onSubmit={(data) => { console.log(data) }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
