import styled from "styled-components";

export const StyledContainer = styled.div`
  position: static;
  width: 100vw;
  height: 100vh;
  padding: 24px;
  ${({ theme }) => theme.flex.center};
`;
