import styled from "styled-components";

export const LogoImg = styled.img`
  width: 60px;
  height: auto;
  margin-bottom: 24px;
`;

export const LogoText = styled.img`
  width: 154px;
  height: auto;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.regular};
  margin-bottom: 4px;
`;

export const LogoDiv = styled.div`
  ${({ theme }) => theme.flex.center};
  flex-grow: 1;
`;
