import React from "react";
import styled from "styled-components";

const StyledTag = styled.div`
  width: 66px;
  height: 22px;
  ${({ theme }) => theme.flex.center};
  color: ${({ theme }) => theme.color.txtBody};
  background-color: ${({ theme }) => theme.color.bgPale};
  border: 1px solid ${({ theme }) => theme.color.stroke};
  border-radius: ${({ theme }) => theme.radius.small};
  ${({ theme }) => theme.typo.small};
  flex-shrink: 0;
`;

const CatagoryTag = ({ title }) => {
  return <StyledTag>{title}</StyledTag>;
};

export default CatagoryTag;
