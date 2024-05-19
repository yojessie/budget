import styled from "styled-components";

export const FloatButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.color.yellow};
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
