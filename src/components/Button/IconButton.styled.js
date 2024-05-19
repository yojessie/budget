import styled from "styled-components";

export const IconButton = styled.div`
  width: 40px;
  height: 40px;
  ${({ theme }) => theme.flex.center};
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
