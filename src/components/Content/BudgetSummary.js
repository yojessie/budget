import React from "react";
import TextButton from "../Modules/TextButton";
import {
  StyledSummary,
  BarGraph,
  Bar,
  TextWrapper,
} from "./BudgetSummary.styled";

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
        <p>총 예산 :</p>
        <p>600,000원</p>
        <TextButton title={"추가하기"} />
      </TextWrapper>
    </StyledSummary>
  );
};

export default BudgetSummary;
