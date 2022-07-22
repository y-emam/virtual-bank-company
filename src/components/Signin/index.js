import React from "react";
import { SinginLog } from "./SigninElements";

const Signin = () => {
  return (
    <>
      <SinginLog>banko</SinginLog>

      <SigninContainer>
        <SigninHeader>Sign in to your account</SigninHeader>

        <SigninLabel>Email</SigninLabel>
        <SigninInp
          placeholder="Enter your email address"
          required
          type="email"
          autofocus
          key="email"
        ></SigninInp>
        <SigninLabel>Password</SigninLabel>
        <SigninInp
          placeholder="Enter your email address"
          required
          type="password"
          key="email"
        ></SigninInp>
      </SigninContainer>
    </>
  );
};

export default Signin;
