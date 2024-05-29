import React from "react";
import {
  LogoImg,
  LogoText,
  Title,
  LogoDiv,
  IntroContainer,
} from "./Intro.styled";
import LoginButton from "../components/Button/LoginButton";
import logoImg from "../assets/logo-img.svg";
import logoText from "../assets/logo-txt.svg";

const Intro = () => {
  return (
    <IntroContainer>
      <LogoDiv>
        <LogoImg src={logoImg} alt="LogoImage" />
        <Title>가볍게 시작하는 예산 관리</Title>
        <LogoText src={logoText} alt="LogoText" />
      </LogoDiv>
      <LoginButton />
    </IntroContainer>
  );
};

export default Intro;
