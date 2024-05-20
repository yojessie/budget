import React from "react";
import { IconButton } from "../Button/IconButton.styled";
import {
  BudgetItem,
  Title,
  Date,
  DateWrapper,
  TextWrapper,
} from "./BudgetItem.styled";
import { IconStar } from "../../assets/icons/icons";

const BudgetList = () => {
  return (
    <BudgetItem>
      <TextWrapper>
        <Title>4월 제주여행</Title>
        <DateWrapper>
          <Date>2024.04.19</Date>
          <Date>~</Date>
          <Date>2024.04.26</Date>
        </DateWrapper>
      </TextWrapper>
      <IconButton>
        <IconStar />
      </IconButton>
    </BudgetItem>
  );
};

export default BudgetList;
