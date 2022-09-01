import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { FormContainer } from "./userElement";
import { signin, authenticate, isAuthenticated } from "../products/ApiCore";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    success: false,
    redirectToReferrer: false,
  });

  const { email, password, error, loading, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({ ...values, redirectToReferrer: true });
        });
      }
    });
  };

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        return <Navigate to="/admin/dashboard" />;
      } else {
        return <Navigate to="/" />;
      }
    }
    if (isAuthenticated()) {
      return <Navigate to="/" />;
    }
  };

  const showError = () => (
    <div style={{ display: error ? "" : "none" }}>{error}</div>
  );

  const showLoading = () => {
    loading && (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  };

  const signInForm = () => (
    <FormContainer>
      <form>
        <div className="input">
          <label>Email</label> <br />
          <input onChange={handleChange("email")} type="email" value={email} />
        </div>
        <div className="input">
          <label>Password</label>
          <br />
          <input
            onChange={handleChange("password")}
            type="password"
            value={password}
          />
        </div>
        <button onClick={clickSubmit}> Iniciar sesión</button>
      </form>
    </FormContainer>
  );

  return (
    <>
      {showError()}
      {showLoading()}
      {signInForm()}
      {redirectUser()}
    </>
  );
};

export default SignIn;
