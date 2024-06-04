import styled from "styled-components";

const STYLE = ({ theme }) => `
  width: 100%;
  height: 44px;
  ${theme.flex.between};
  background-color: ${theme.color.bg};
  border-radius: ${theme.radius.regular};
  border: 1px solid ${theme.color.stroke};
  color: ${theme.color.txtBody};
  padding: 8px 4px 8px 16px;
  margin-bottom: 8px;
`;

export const DateButton = styled.button`
  ${STYLE}
`;

export const SelectDiv = styled.div`
  position: relative;
  width: 100%;

  button {
    position: absolute;
    top: 2px;
    right: 4px;
  }
`;

export const CatagorySelect = styled.select`
  ${STYLE}

  &:focus {
    border: 1px solid ${({ theme }) => theme.color.blue};
  }

  option:first-child {
    color: ${({ theme }) => theme.color.disabled};
  }
`;
