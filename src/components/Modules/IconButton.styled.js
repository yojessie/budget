import styled from "styled-components";

export const IconButton = styled.button`
  width: 40px;
  height: 40px;
  ${({ theme }) => theme.flex.center};
  cursor: pointer;
`;
