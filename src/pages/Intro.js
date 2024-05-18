import React from "react";
import { Logo } from "./Intro.styled";
import { StyledContainer } from "../components/container.styled";
import Login from "../components/Button/LoginButton";
import logo from "../assets/logo.png";

const Intro = () => {
  return (
    <StyledContainer>
      <Logo src={logo} alt="Logo" />
      <Login />
    </StyledContainer>
  );
};

export default Intro;
