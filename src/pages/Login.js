import React from "react";
import {
  LogoImg,
  LogoText,
  SubText,
  LogoDiv,
  LoginContainer,
} from "./Login.styled";
import LoginButton from "../components/Modules/LoginButton";

import logoImg from "../assets/logo-img.svg";
import logoText from "../assets/logo-txt.svg";

const Login = () => {
  return (
    <LoginContainer>
      <LogoDiv>
        <LogoImg src={logoImg} alt="LogoImage" />
        <SubText>가볍게 시작하는 예산 관리</SubText>
        <LogoText src={logoText} alt="LogoText" />
      </LogoDiv>
      <LoginButton />
    </LoginContainer>
  );
};

export default Login;
