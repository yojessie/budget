import styled from "styled-components";

const Icon = styled.svg`
  width: ${({ size }) => size || "24px"};
  height: ${({ size }) => size || "24px"};
  color: ${({ color, theme }) => color || theme.color.yellow};
`;

export default Icon;
