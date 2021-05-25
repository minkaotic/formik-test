# Formik notes
Code along from Ben Awad's Youtube tutorial: https://youtu.be/FD50LPJ6bjE

## Basic use
- Wrap the form in a `<Formik>` component using render props syntax
- The Formik component requires two props: initial values of the form, and an `onSubmit` function
- The `onSubmit` function has a `data` argument representing the form data to be submitted

```js
<Formik
  initialValues={{ firstName: "" }}
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
      <div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )}
</Formik>
```

## Simplifying things with `<Field />`
- To avoid passing `onBlur`, `onChange` etc to every single input field, you can simplify things by using Formik's `<Field />` component
- It even takes in a component which you want the field to render as via an `as` prop
```js
<Field name="firstName" type="input" as={TextField} />
```
...is equivalent to...
```js
<TextField
  name="firstName"
  value={values.firstName}
  onChange={handleChange}
  onBlur={handleBlur}
/>
```

## Disabling button during form submit
- The `onSubmit` function optionally offers arguments that can be destructured, for example `setSubmitting`:
```js
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
```
- This can then be passed in the render props and used to disable the button:
```js
{({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    ...
    <Button
      type="submit"
      disabled={isSubmitting}
    >Submit</Button>
  </form>)}
```
