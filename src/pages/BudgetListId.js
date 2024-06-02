import React from "react";
import Container from "../components/Modules/Container.styled";
import Gnb from "../components/Modules/Gnb";
import FloatButton from "../components/Modules/FloatButton";
import BudgetSummary from "../components/Content/BudgetSummary";
import { EmptyContainer } from "./BudgetListId.styled";

const BudgetListId = () => {
  return (
    <Container>
      <Gnb isDetail={true} title={"4월 제주 여행"}></Gnb>
      <BudgetSummary />
      <EmptyContainer>
        <p>기록된 내역이 없어요</p>
      </EmptyContainer>
      <FloatButton />
    </Container>
  );
};

export default BudgetListId;
