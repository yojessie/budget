import styled from "styled-components";

export const IconButton = styled.button`
  width: 40px;
  height: 40px;
  ${({ theme }) => theme.grid.center};
  cursor: pointer;
`;
