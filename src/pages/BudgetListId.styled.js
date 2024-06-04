import styled from "styled-components";

export const EmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.flex.center};

  p {
    color: ${({ theme }) => theme.color.disabled};
  }
`;

export const StyledSpendList = styled.ol`
  width: 100%;
  overflow: auto;
  scrollbar-width: none;
  padding-bottom: 60px;

  :last-child {
    border-bottom: 0;
  }
`;
