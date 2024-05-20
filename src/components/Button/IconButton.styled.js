import styled from "styled-components";

export const IconButton = styled.div`
  width: 40px;
  height: 40px;
  ${({ theme }) => theme.flex.center};
  cursor: pointer;

  color: ${({ color, theme }) => color || theme.color.yellow};
  // svg 아이콘을 감싸는 태그가 필요하다
`;
