import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import { useFormik } from "formik";
interface valuesType {
  username: string;
  password: string;
  email: string;
}
function Register() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    onSubmit: (values: valuesType) => {
      console.log(values);
    },
  });
  return (
    <div className="registerPage">
      <div className="box">
        <div className="box-left">
          <h1>Register</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="inputs">
              <div className="input">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
                <div className="input">
                  <label htmlFor="pass">Password</label>
                  <input
                    id="pass"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </div>
                <div className="input">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
              </div>
            </div>
            <div className="button">
              <button type="submit">Register</button>
            </div>
          </form>

          <div className="register-info">
            <p>Already have an account?</p>
            <Link style={{ color: "#8052CC" }} to="/login">
              Login
            </Link>
          </div>
        </div>
        <div className="box-right">
          <h1>Hey Welcome!</h1>
        </div>
      </div>
    </div>
  );
}

export default Register;
