import styled from "styled-components";

export const InputGroup = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.grid.center}
  gap: 8px;
  grid-template-rows: auto auto auto 1fr;
`;
