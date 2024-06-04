import React from "react";
import styled from "styled-components";
import {
  IconCalendar,
  IconClose,
  IconDown,
  IconEdit,
  IconLeft,
  IconMenu,
  IconPlus,
  IconRight,
  IconSetting,
  IconStar,
} from "../../assets/icons/icons";

const StyledIconButton = styled.button`
  width: 40px;
  height: 40px;
  ${({ theme }) => theme.flex.center};
  flex-shrink: 0;
  cursor: pointer;
`;

const IconButton = ({ iconType }) => {
  const renderIcon = () => {
    switch (iconType) {
      case "calendar":
        return <IconCalendar />;
      case "close":
        return <IconClose />;
      case "down":
        return <IconDown />;
      case "edit":
        return <IconEdit />;
      case "left":
        return <IconLeft />;
      case "menu":
        return <IconMenu />;
      case "plus":
        return <IconPlus />;
      case "right":
        return <IconRight />;
      case "setting":
        return <IconSetting />;
      case "star":
        return <IconStar />;
      default:
        return null;
    }
  };

  return <StyledIconButton>{renderIcon()}</StyledIconButton>;
};

export default IconButton;
