import React from "react";
import styled from "styled-components";
import TextButton from "../Modules/TextButton";

const StyledSummary = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.radius.large};
  padding: 24px;

  h1 {
    margin-bottom: 16px;
  }
`;

const BarGraph = styled.div`
  position: relative;
  width: 100%;
  height: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color.stroke};
  margin-bottom: 10px;
`;

const Bar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.color.green};
  border: 1px solid ${({ theme }) => theme.color.stroke};
  border-radius: 6px;
`;

const TextWrapper = styled.div`
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

const BudgetSummary = () => {
  return (
    <StyledSummary>
      <h1>0원</h1>
      <BarGraph>
        <Bar></Bar>
      </BarGraph>
      <TextWrapper>
        <p>2024-03-01</p>
        <p>~</p>
        <p>2024-04-30</p>
      </TextWrapper>
      <TextWrapper>
        <p>현재 총 예산 :</p>
        <p>600,000원</p>
        <TextButton title={"추가하기"} />
      </TextWrapper>
    </StyledSummary>
  );
};

export default BudgetSummary;
