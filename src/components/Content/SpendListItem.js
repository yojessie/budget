import React from "react";
import { StyledSpendDay, StyledSpendItem } from "./SpendListItem.styled";

const SpendListItem = () => {
  return (
    <StyledSpendDay>
      <p>2024년 6월 3일</p>
      <StyledSpendItem></StyledSpendItem>
    </StyledSpendDay>
  );
};

export default SpendListItem;
