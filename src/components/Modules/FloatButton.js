import React from "react";
import styled from "styled-components";

const StyledFloatButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.color.yellow};
`;

const FloatButton = () => {
  return <StyledFloatButton></StyledFloatButton>;
};

export default FloatButton;
