import React from "react";
import Container from "../components/Modules/Container.styled";
import InnerContainer from "../components/Modules/InnerContainer.styled";
import Input from "../components/Modules/Input";
import Button from "../components/Modules/Button";
import { InputGroup } from "./BudgetSet.styled";

const BudgetSet = () => {
  return (
    <Container>
      <InnerContainer>
        <h1>
          예산을 설정하고 <br />
          소비내용을 기록하세요
        </h1>
        <InputGroup>
          <Input placeholder={"무엇을 위한 예산인가요?"} />
          <Input placeholder={"예산 금액을 입력하세요"} />
          <Input placeholder={"시작일과 종료일을 입력하세요"} />
          <p>입력한 내용은 나중에 수정 할 수 있어요</p>
        </InputGroup>
        <Button>시작하기</Button>
      </InnerContainer>
    </Container>
  );
};

export default BudgetSet;
