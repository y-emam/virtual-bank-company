import React from "react";
import {
  SigninBg,
  SigninBtn,
  SigninContainer,
  SigninForgot,
  SigninHeader,
  SigninInp,
  SigninLabel,
  SinginLogo,
} from "./SigninElements";

const Signin = () => {
  return (
    <SigninBg>
      <SinginLogo>banko</SinginLogo>

      <SigninContainer>
        <SigninHeader>Sign in to your account</SigninHeader>

        <SigninLabel>Email</SigninLabel>
        <SigninInp required type="email" autoFocus key="email"></SigninInp>
        <SigninLabel>Password</SigninLabel>
        <SigninInp required type="password" key="password"></SigninInp>

        <SigninBtn>Sign in</SigninBtn>
        <SigninForgot to="/signin">Forgot Password</SigninForgot>
      </SigninContainer>
    </SigninBg>
  );
};

export default Signin;
