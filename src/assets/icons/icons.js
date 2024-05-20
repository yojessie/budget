import styled from "styled-components";
import Icon from "./icons.styled";

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

export const IconCalendar = styled(calendar)`
  ${Icon}
`;
export const IconDown = styled(down)`
  ${Icon}
`;
export const IconLeft = styled(left)`
  ${Icon}
`;
export const IconRight = styled(right)`
  ${Icon}
`;
export const IconClose = styled(close)`
  ${Icon}
`;
export const IconEdit = styled(edit)`
  ${Icon}
`;
export const IconMenu = styled(menu)`
  ${Icon}
`;
export const IconPlus = styled(plus)`
  ${Icon}
`;
export const IconSetting = styled(setting)`
  ${Icon}
`;
export const IconStar = styled(star)`
  ${Icon}
`;
export const IconMoon = styled(moon)`
  ${Icon}
  color: ${({ theme }) => theme.color.blue};
`;
export const IconSun = styled(sun)`
  ${Icon}
`;
