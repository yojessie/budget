import styled from "styled-components";

const Container = styled.div`
  position: static;
  width: 100%;
  max-width: 375px;
  height: 100%;
  max-height: 740px;
  padding: 24px;
  background-color: ${({ theme }) => theme.color.bg};
  border-radius: ${({ theme }) => theme.radius.regular};
  ${({ theme }) => theme.grid.center}
  overflow: hidden;
`;

export default Container;
