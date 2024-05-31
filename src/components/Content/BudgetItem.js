import React, { useState } from "react";
import { IconButton } from "../Modules/IconButton.styled";
import {
  StyledList,
  Title,
  Date,
  DateWrapper,
  TextWrapper,
} from "./BudgetItem.styled";
import { IconStar } from "../../assets/icons/icons";

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
        className="starButton"
        onClick={handleFavorit}
        isFavorit={isFavorit}
      >
        <IconStar />
      </IconButton>
    </StyledList>
  );
};

export default BudgetItem;
