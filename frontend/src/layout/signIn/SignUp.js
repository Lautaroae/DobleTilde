import React from "react";
import { FormContainer, NavBtn, NavBtnLink } from "./userElement";

const SignUp = () => {
  return (
    <>
      <FormContainer>
        <form>
          <div className="input">
            <label>Email</label> <br />
            <input
              // onChange={handleChange("email")}
              type="email"
              // value={email}
            />
          </div>
          <div className="input">
            <label>Password</label>
            <br />
            <input
              // onChange={handleChange("password")}
              type="password"
              // value={password}
            />
          </div>
          <NavBtn>
            <NavBtnLink to="/signin"> Registrate</NavBtnLink>
          </NavBtn>
        </form>
      </FormContainer>
    </>
  );
};

export default SignUp;
