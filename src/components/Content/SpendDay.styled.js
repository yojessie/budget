import styled from "styled-components";

export const StyledSpendDay = styled.li`
  width: 100%;
  height: auto;
  padding: 24px 0;
  border-bottom: 1px dashed ${({ theme }) => theme.color.stroke};
  ${({ theme }) => theme.flex.startCol}
  gap: 16px;
`;
