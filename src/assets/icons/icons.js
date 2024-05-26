import styled from "styled-components";

import { ReactComponent as calendar } from "./calendar.svg";
import { ReactComponent as down } from "./down.svg";
import { ReactComponent as left } from "./left.svg";
import { ReactComponent as right } from "./right.svg";
import { ReactComponent as close } from "./close.svg";
import { ReactComponent as edit } from "./edit.svg";
import { ReactComponent as menu } from "./menu.svg";
import { ReactComponent as plus } from "./plus.svg";
import { ReactComponent as setting } from "./setting.svg";
import { ReactComponent as star } from "./star.svg";
import { ReactComponent as moon } from "./moon.svg";
import { ReactComponent as sun } from "./sun.svg";

const STYLEDICON = `
  color: ${({ theme }) => theme.color.txtBody};
  width: 24px;
  height: 24px;
`;

export const IconCalendar = styled(calendar)`
  ${STYLEDICON}
`;
export const IconDown = styled(down)`
  ${STYLEDICON}
`;
export const IconLeft = styled(left)`
  ${STYLEDICON}
`;
export const IconRight = styled(right)`
  ${STYLEDICON}
`;
export const IconClose = styled(close)`
  ${STYLEDICON}
`;
export const IconEdit = styled(edit)`
  ${STYLEDICON}
`;
export const IconMenu = styled(menu)`
  ${STYLEDICON}
`;
export const IconPlus = styled(plus)`
  ${STYLEDICON}
`;
export const IconSetting = styled(setting)`
  ${STYLEDICON}
`;
export const IconStar = styled(star)`
  ${STYLEDICON}
  color: ${({ theme }) => theme.color.bgDisabled};
`;
export const IconMoon = styled(moon)`
  ${STYLEDICON}
  color: ${({ theme }) => theme.color.blue};
`;
export const IconSun = styled(sun)`
  ${STYLEDICON}
  color: ${({ theme }) => theme.color.red};
`;
