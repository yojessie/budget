import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.color.white20};
  ${({ theme }) => theme.flex.center};
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.radius.small};
  ${({ theme }) => theme.typo.small};
  color: ${({ theme }) => theme.color.white};
`;

const TextButton = ({ title }) => {
  return <StyledButton>{title}</StyledButton>;
};

export default TextButton;
