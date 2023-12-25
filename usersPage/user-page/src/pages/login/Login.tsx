import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import { useFormik } from "formik";
import type { RootState } from "./../redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount } from "../../redux/slices/userSlice";
interface valuesType {
  username: string;
  password: string;
}
function Login() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  console.log(users);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values: valuesType) => {
      console.log(values);
      dispatch(incrementByAmount(2));
    },
  });
  return (
    <div className="Loginpage">
      <div className="box">
        <div className="box-left">
          <h1>Login</h1>

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
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </div>
              </div>
            </div>
            <div className="button">
              <button type="submit">Sign in</button>
            </div>
          </form>

          <div className="register-info">
            <p>Don't have an account?</p>
            <Link style={{ color: "#8052CC" }} to="/register">
              Register
            </Link>
          </div>
        </div>
        <div className="box-right">
          <h1>Hey Welcome back!</h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
