import styled from "styled-components";

export const StyledSummary = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.radius.large};
  padding: 24px;
  margin-bottom: 16px;

  h1 {
    margin-bottom: 16px;
  }
`;

export const BarGraph = styled.div`
  position: relative;
  width: 100%;
  height: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color.stroke};
  margin-bottom: 10px;
`;

export const Bar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.color.green};
  border: 1px solid ${({ theme }) => theme.color.stroke};
  border-radius: 6px;
`;

export const TextWrapper = styled.div`
  ${({ theme }) => theme.flex.centerRow};
  gap: 6px;
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }

  p {
    font-weight: 100;
  }
`;
