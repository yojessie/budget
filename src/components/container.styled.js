import styled from "styled-components";

export const StyledContainer = styled.div`
  position: static;
  width: 100%;
  height: 100%;
  padding: 0 24px 24px 24px;
  background-color: ${({ theme }) => theme.color.bg};
  ${({ theme }) => theme.flex.center};
  border-radius: ${({ theme }) => theme.radius.regular};
`;
