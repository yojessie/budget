import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  background-color: ${({ theme }) => theme.color.white20};
  ${({ theme }) => theme.flex.center};
  padding: 2px 8px 2px 8px;
  border-radius: 4px;
  ${({ theme }) => theme.typo.small};
  color: ${({ theme }) => theme.color.white};
`;

const TextButton = ({ title }) => {
  return <StyledButton>{title}</StyledButton>;
};

export default TextButton;
