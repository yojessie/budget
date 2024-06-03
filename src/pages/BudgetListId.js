import React from "react";
import Container from "../components/Modules/Container.styled";
import Gnb from "../components/Modules/Gnb";
import FloatButton from "../components/Modules/FloatButton";
import BudgetSummary from "../components/Content/BudgetSummary";
import { EmptyContainer } from "./BudgetListId.styled";
import SpendListItem from "../components/Content/SpendListItem";

const BudgetListId = ({ isEmpty }) => {
  return (
    <Container>
      <Gnb isDetail={true} title={"4월 제주 여행"}></Gnb>
      <BudgetSummary />
      {isEmpty ? (
        <EmptyContainer>
          <p>기록된 내역이 없어요</p>
        </EmptyContainer>
      ) : (
        <SpendListItem></SpendListItem>
      )}
      <FloatButton />
    </Container>
  );
};

export default BudgetListId;
