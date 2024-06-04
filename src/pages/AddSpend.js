import React from "react";
import Container from "../components/Modules/Container.styled";
import InnerContainer from "../components/Modules/InnerContainer.styled";
import { InputGroup } from "../components/Modules/Input";
import Input from "../components/Modules/Input";
import Button from "../components/Modules/Button";
import IconButton from "../components/Modules/IconButton";
import { DateButton, SelectDiv, CatagorySelect } from "./AddSpend.styled";

const AddSpend = () => {
  return (
    <Container>
      <InnerContainer>
        <h1>소비내역</h1>
        <InputGroup>
          <DateButton>
            <p>2024년 6월 30일</p>
            <IconButton iconType={"calendar"} />
          </DateButton>
          <Input placeholder={"소비금액"} />
          <SelectDiv>
            <CatagorySelect name="catagory">
              <option selected disabled value="">
                카테고리
              </option>
              <option value="식비">식비</option>
              <option value="교통비">교통비</option>
            </CatagorySelect>
            <IconButton iconType={"down"} />
          </SelectDiv>
          <Input placeholder={"소비내용"} />
          <Input placeholder={"메모"} />
        </InputGroup>
        <Button>저장하기</Button>
        <IconButton className="close-button" iconType={"close"} />
      </InnerContainer>
    </Container>
  );
};

export default AddSpend;
