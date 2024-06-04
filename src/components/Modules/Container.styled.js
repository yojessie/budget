import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 375px;
  height: 100%;
  max-height: 740px;
  padding: 0 24px 24px 24px;
  background-color: ${({ theme }) => theme.color.bg};
  ${({ theme }) => theme.flex.center}
  justify-content: flex-start;
  overflow: hidden;
`;

export default Container;
