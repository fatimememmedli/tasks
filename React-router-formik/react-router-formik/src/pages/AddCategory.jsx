import React from "react";
import { useFormik } from "formik";

function AddCategory() {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 10) {
      errors.name = "Must be 10 characters or less";
    } else if (values.name.length < 3) {
      errors.name = "Must be 3 characters or less";
    }

    if (!values.desc) {
      errors.desc = "Required";
    } else if (values.desc.length < 5) {
      errors.desc = "Must be 5 characters or less";
    }
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,7}$/i.test(values.desc)) {
    //   errors.desc = "Invalid Description";
    // }

    return errors;
  };

  const SignupForm = () => {
    // Pass the useFormik() hook initial form values, a validate function that will be called when
    // form values change or fields are blurred, and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
      initialValues: {
        name: "",
        desc: "",
      },
      validate,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
        let obj = {
          name: formik.values.name,
          description: formik.values.desc,
        };
        fetch("https://6565f015eb8bb4b70ef29ee3.mockapi.io/categories", {
          // Adding method type
          method: "POST",

          // Adding body or contents to send
          body: JSON.stringify(obj),

          // Adding headers to the request
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">NAme</label>
        <input
          id="name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}

        <label htmlFor="desc">Desc</label>
        <input
          id="desc"
          name="desc"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.desc}
        />
        {formik.errors.desc ? <div>{formik.errors.desc}</div> : null}

        <button type="submit">Submit</button>
      </form>
    );
  };
  return SignupForm();
}

export default AddCategory;
