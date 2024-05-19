import React from "react";
import { IconButton, Icon } from "../Button/IconButton.styled";
import {
  BudgetItem,
  Title,
  Date,
  DateWrapper,
  TextWrapper,
} from "./BudgetItem.styled";
import StarOff from "../../assets/star-off.svg";

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
        <Icon src={StarOff} alt="budget list"></Icon>
      </IconButton>
    </BudgetItem>
  );
};

export default BudgetList;
