import styled from "styled-components";

export const BudgetItem = styled.li`
  width: 100%;
  height: auto;
  padding: 20px 8px 20px 24px;
  border-radius: ${({ theme }) => theme.radius.regular};
  border: 1px solid ${({ theme }) => theme.color.stroke};
  background: ${({ theme }) => theme.color.bgPale};
  ${({ theme }) => theme.flex.centerRow};
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  .starButton {
    color: ${({ isFavorit, theme }) =>
      isFavorit ? theme.color.yellow : theme.color.bgDisabled};
  }
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typo.large};
  margin-bottom: 4px;
`;

export const Date = styled.p`
  ${({ theme }) => theme.typo.regular};
  color: ${({ theme }) => theme.color.txtSub};
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const TextWrapper = styled.div`
  ${({ theme }) => theme.flex.center};
  align-items: flex-start;
  flex-grow: 1;
`;
