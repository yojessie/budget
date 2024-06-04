import styled from "styled-components";

export const StyledSpendItem = styled.div`
  width: 100%;
  ${({ theme }) => theme.flex.startCol}
  gap: 2px;

  .subText {
    color: ${({ theme }) => theme.color.txtSub};
    margin-left: 74px;
  }
`;

export const StyledSpendDetail = styled.div`
  width: 100%;
  ${({ theme }) => theme.flex.startRow}
  gap: 8px;

  .money {
    width: 80px;
    margin-top: 2px;
    flex-shrink: 0;
    text-align: right;
  }

  .title {
    width: 100%;
    flex-grow: 1;
    margin-top: 2px;
  }
`;
