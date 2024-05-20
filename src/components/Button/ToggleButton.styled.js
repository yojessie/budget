import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: auto;
  background-color: ${({ theme }) => theme.color.bgDark};
  border-radius: 20px;
  gap: 4px;
  flex-direction: ${({ isDarkMode }) => (isDarkMode ? "row" : "row-reverse")};
  padding: ${({ isDarkMode }) =>
    isDarkMode ? "4px 6px 4px 8px" : "4px 8px 4px 6px"};
  ${({ theme }) => theme.flex.centerRow};
  cursor: pointer;
`;

export const Toggle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.bgPale};
`;
