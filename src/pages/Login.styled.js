import styled from "styled-components";
import Container from "../components/Modules/Container.styled";

export const LogoImg = styled.img`
  width: 60px;
  height: auto;
  margin-bottom: 24px;
`;

export const LogoText = styled.img`
  width: 154px;
  height: auto;
`;

export const SubText = styled.h1`
  ${({ theme }) => theme.typo.regular};
  margin-bottom: 8px;
`;

export const LogoDiv = styled.div`
  ${({ theme }) => theme.flex.center};
  flex-grow: 1;
`;

export const LoginContainer = styled(Container)`
  background: ${({ theme }) => theme.color.gradient};
`;
