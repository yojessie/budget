import React, { useState } from "react";
import IconButton from "../Modules/IconButton";
import {
  StyledList,
  Title,
  Date,
  DateWrapper,
  TextWrapper,
} from "./BudgetItem.styled";

const BudgetItem = () => {
  const [isFavorit, setFavorit] = useState(false);

  const handleFavorit = () => {
    setFavorit((prev) => !prev);
  };

  return (
    <StyledList isFavorit={isFavorit}>
      <TextWrapper>
        <Title>4월 제주여행</Title>
        <DateWrapper>
          <Date>2024.04.19</Date>
          <Date>~</Date>
          <Date>2024.04.26</Date>
        </DateWrapper>
      </TextWrapper>
      <IconButton
        onClick={handleFavorit}
        isFavorit={isFavorit}
        iconType="star"
      />
    </StyledList>
  );
};

export default BudgetItem;
