import styled from "styled-components";
import Container from "./Container";

const InnerContainer = styled(Container)`
  width: 100%;
  height: 100%;
  padding: 40px 24px 24px 24px;
  background-color: ${({ theme }) => theme.color.bgPale};
  border: 1px solid ${({ theme }) => theme.color.stroke};
  border-radius: ${({ theme }) => theme.radius.regular};
  ${({ theme }) => theme.grid.center}
  grid-template-rows: auto 1fr auto;
  gap: 40px;
`;

export default InnerContainer;
