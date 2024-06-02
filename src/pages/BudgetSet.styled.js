import styled from "styled-components";

export const InputGroup = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.flex.center}
  justify-content: flex-start;

  input {
    margin-bottom: 8px;
  }

  p {
    margin-top: 16px;
  }
`;
