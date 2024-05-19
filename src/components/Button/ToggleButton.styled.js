import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: auto;
  background-color: ${({ theme }) => theme.color.bgDark};
  border-radius: 20px;
  padding: ${({ isDarkMode }) =>
    isDarkMode ? "4px 6px 4px 8px" : "4px 8px 4px 6px"};
  gap: 4px;
  ${({ theme }) => theme.flex.centerRow};
  flex-direction: ${({ isDarkMode }) => (isDarkMode ? "row" : "row-reverse")};
`;

export const Toggle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.bgPale};
  cursor: pointer;
`;

export const MoonIcon = styled.img`
  width: 24px;
  height: 24px;
  display: ${({ isDarkMode }) => (isDarkMode ? "block" : "none")};
`;

export const SunIcon = styled.img`
  width: 24px;
  height: 24px;
  display: ${({ isDarkMode }) => (isDarkMode ? "none" : "block")};
`;
