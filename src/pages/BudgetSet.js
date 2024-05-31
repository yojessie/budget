import React from "react";
import Container from "../components/Modules/Container";
import Input from "../components/Modules/Input";
import Title from "../components/Modules/Title";
import { InputGroup } from "./BudgetSet.styled";

const BudgetSet = () => {
  return (
    <Container>
      <Title>
        예산을 설정하고 <br />
        소비내용을 기록하세요
      </Title>
      <InputGroup>
        <Input placeholder={"무엇을 위한 예산인가요?"} />
        <Input placeholder={"예산 금액을 입력하세요"} />
        <Input placeholder={"시작일과 종료일을 입력하세요"} />
      </InputGroup>
    </Container>
  );
};

export default BudgetSet;
