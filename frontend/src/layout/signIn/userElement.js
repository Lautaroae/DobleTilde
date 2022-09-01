import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const FormContainer = styled.div`
  background: #000;
  color: #ffff;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    padding: 3rem 2rem;
    border-radius: 10px;
    border: 1px solid #218cf4;
    box-shadow: 0 5px 10px #218cf4;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: center;
    align-items: center;
  }
  .input {
    margin: 1rem 0;
  }
  input {
    margin: 1rem 0 0 0;
  }

  button {
    margin-top: 1rem;
    border-radius: 50px;
    background: #218cf4;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
      transition: all 0.2s ease-in-out;
      background: #fff;
      color: #010606;
    }
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #218cf4;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
