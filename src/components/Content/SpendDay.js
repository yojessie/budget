import React from "react";
import { StyledSpendDay } from "./SpendDay.styled";
import SpendItem from "./SpendItem";

const SpendListItem = () => {
  return (
    <StyledSpendDay>
      <p>2024년 6월 3일 월요일</p>
      <SpendItem />
      <SpendItem />
      <SpendItem />
    </StyledSpendDay>
  );
};

export default SpendListItem;
