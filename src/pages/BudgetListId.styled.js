import styled from "styled-components";

export const EmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.flex.center};

  p {
    color: ${({ theme }) => theme.color.bgDisabled};
  }
`;
