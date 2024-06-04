import React from "react";
import styled from "styled-components";
import Container from "./Container.styled";
import Button from "./Button";

const BlackOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.bg};
  opacity: 80%;
  z-index: 100;
`;

const CalendarContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  ${({ theme }) => theme.flex.center};
  width: 100%;
  height: 200px;
  padding: 48px 24px;
  background-color: ${({ theme }) => theme.color.bgPale};
  border-radius: 24px 24px 0px 0px;
  z-index: 200;
  gap: 24px;
`;

const Calendar = () => {
  return (
    <Container>
      <BlackOverlay>
        <CalendarContainer>
          <h1>This is Test</h1>
          <Button>선택 완료</Button>
        </CalendarContainer>
      </BlackOverlay>
    </Container>
  );
};

export default Calendar;
