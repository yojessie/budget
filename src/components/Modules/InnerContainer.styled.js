import styled from "styled-components";
import Container from "./Container.styled";

const InnerContainer = styled(Container)`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px 24px 24px 24px;
  margin-top: 24px;
  background-color: ${({ theme }) => theme.color.bgPale};
  border: 1px solid ${({ theme }) => theme.color.stroke};
  border-radius: ${({ theme }) => theme.radius.regular};
  ${({ theme }) => theme.flex.center}
  gap: 24px;

  button.close-button {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;

export default InnerContainer;
