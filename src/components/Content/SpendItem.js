import React from "react";
import CatagoryTag from "../Modules/CatagoryTag";
import { StyledSpendItem, StyledSpendDetail } from "./SpendItem.styled";

const SpendListItem = () => {
  return (
    <StyledSpendItem>
      <StyledSpendDetail>
        <CatagoryTag title={"식비"} />
        <p className="title">알파마트 장보기</p>
        <p className="money">50,000원</p>
      </StyledSpendDetail>
      <p className="subText">파, 다진마늘, 참기름, 파슬리</p>
    </StyledSpendItem>
  );
};

export default SpendListItem;
