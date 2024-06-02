const commonStyles = {
  typo: {
    large: `
      font-size: 18px;
      font-weight: 500;
      line-height: 140%;
    `,
    regular: `
      font-size: 14px;
      font-weight: 300;
      line-height: 140%;
    `,
    small: `
      font-size: 12px;
      font-weight: 300;
      line-height: 140%;
    `,
    tiny: `
      font-size: 10px;
      font-weight: 300;
      line-height: 140%;
    `,
  },
  grid: {
    center: `
      display: grid;
      place-items: center;
  `,
    centerRow: `
      display: grid;
      place-items: center;
      grid-auto-flow: column;
  `,
    between: `
      display: grid;
      align-items: center;
      justify-content: space-between;
      grid-auto-flow: column;
  `,
  },
  radius: {
    large: "16px",
    regular: "12px",
  },
  shadow: `0px 8px 16px 0px rgba(67, 146, 245, 0.20)`,
};

export default commonStyles;
