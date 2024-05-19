import React from "react";
import { LogoImg, LogoText, Title, LogoDiv } from "./Intro.styled";
import { StyledContainer } from "../components/container.styled";
import LoginButton from "../components/Button/LoginButton";
import logoImg from "../assets/logo-img.svg";
import logoText from "../assets/logo-txt.svg";

const Intro = () => {
  return (
    <StyledContainer>
      <LogoDiv>
        <LogoImg src={logoImg} alt="LogoImage" />
        <Title>가볍게 시작하는 예산 관리</Title>
        <LogoText src={logoText} alt="LogoText" />
      </LogoDiv>
      <LoginButton />
    </StyledContainer>
  );
};

export default Intro;
