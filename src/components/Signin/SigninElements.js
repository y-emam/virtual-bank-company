import styled from "styled-components";
import { Link } from "react-router-dom";

export const SigninBg = styled.div`
  background: #01bf71;
  width: 100%;
  height: 100vh;
`;

export const SinginLogo = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  position: relative;
  font-weight: bold;
  top: 25px;
  left: 25px;
  width: 50px;
`;

export const SigninContainer = styled.form`
  height: 400px;
  width: 350px;
  background: #010606;
  display: flex;
  flex-direction: column;
  margin: 60px auto 0;
  padding: 50px 12px;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
`;

export const SigninHeader = styled.h1`
  color: #fff;
  font-size: 24px;
`;

export const SigninLabel = styled.label`
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  align-self: flex-start;
  margin-top: 20px;
  margin-left: 14px;
  margin-bottom: -20px;
`;

export const SigninInp = styled.input`
  width: 80%;
  height: 30px;
  border-radius: 4px;
  outline: none;
  padding: 10px 20px;
`;

export const SigninBtn = styled.button`
  background: #01bf71;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 10px;
  border: none;
  outline: none;
  width: 91%;
  height: 60px;
  cursor: pointer;
  box-shadow: 0px 2px 4px #01bf71;
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 0px 0px 0px #fff;
    color: #010606;
    background: #fff;
  }
`;

export const SigninForgot = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-top: -10px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
