import styled from "styled-components";

export const GnbContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 16px 0;
  ${({ theme }) => theme.flex.between};
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.large};
`;
