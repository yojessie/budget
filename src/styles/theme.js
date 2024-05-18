import { DefaultTheme } from "styled-components";

const common = {
  font: {
    size: {
      large: "18px",
      regular: "14px",
      small: "12px",
      tiny: "10px",
    },
    weight: {
      bold: 700,
      regular: 500,
      light: 300,
    },
    lineHeight: "1.4",
  },
  flex: {
    center: `
    display: flex; 
    justify-content: center;
    align-items: center;
  `,
    centerColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  },
  radius: {
    large: "16px",
    regular: "12px",
  },
  shadow: `0px 8px 16px 0px rgba(67, 146, 245, 0.20)`,
};

const lightTheme = {
  color: {
    bg: "#F8F8FC",
    bgPale: "#FFFFFF",
    bgDark: "#E6E9EE",
    bgDisabled: "#CDD4E1",
    txtBody: "#3D434B",
    txtSub: "#ADB4BD",
    txtWhite: "#FFFFFF",
    stroke: "#E6E9EE",
    blue: "#4392F5",
    yellow: "#FEC044",
    green: "#76BC27",
    red: "#ED5564",
    background: "linear-gradient(167deg, #F8F9ED 0%, #E7F2FF 100%)",
  },
  ...common,
};

const darkTheme = {
  color: {
    bg: "#22242A",
    bgPale: "#323741",
    bgDark: "#1A1B1F",
    bgDisabled: "#4E5466",
    txtBody: "#FFFFFF",
    txtSub: "#7B849C",
    txtWhite: "#FFFFFF",
    stroke: "#41444D",
    blue: "#4392F5",
    yellow: "#FEC044",
    green: "#8FD148",
    red: "#FF435A",
    background: "linear-gradient(167deg, #22242A 0%, #2A3043 100%)",
  },
  ...common,
};

// const typo = {
//   large: `color: ${color.dark.txtBody}; font-size: ${font.size.large}; font-weight: ${font.weight.regular}; line-height: ${font.lineHeight}`,
//   regular: `color: ${color.dark.txtBody}; font-size: ${font.size.regular}; font-weight: ${font.weight.light}; line-height: ${font.lineHeight}`,
//   small: `color: ${color.dark.txtBody}; font-size: ${font.size.small}; font-weight: ${font.weight.light}; line-height: ${font.lineHeight}`,
//   tiny: `color: ${color.dark.txtBody}; font-size: ${font.size.tiny}; font-weight: ${font.weight.regular}; line-height: ${font.lineHeight}`,
// };

export { lightTheme, darkTheme };
