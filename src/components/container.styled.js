import styled from "styled-components";

export const StyledContainer = styled.div`
  position: static;
  width: 100vw;
  height: 100vh;
  padding: 24px;
  background-color: ${({ theme }) => theme.color.bg};
  color: ${({ theme }) => theme.color.txtBody};
  ${({ theme }) => theme.flex.center};
`;
