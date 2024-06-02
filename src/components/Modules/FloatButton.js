import React from "react";
import styled from "styled-components";
import IconButton from "./IconButton";

const StyledFloatButton = styled.button`
  position: absolute;
  right: 24px;
  bottom: 24px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.color.yellow};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.flex.center}
`;

const FloatButton = () => {
  return (
    <StyledFloatButton>
      <IconButton iconType="edit" />
    </StyledFloatButton>
  );
};

export default FloatButton;
