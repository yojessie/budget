const commonStyles = {
  typo: {
    large: `
      font-size: 18px;
      font-weight: 500;
      line-height: 120%;
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
  flex: {
    center: `
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
  `,
    centerRow: `
      display: flex;
      align-items: center;
      justify-content: center;
  `,
    between: `
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0;
      align-self: stretch;
  `,
  },
  radius: {
    large: "16px",
    regular: "12px",
  },
  shadow: `0px 8px 16px 0px rgba(67, 146, 245, 0.20)`,
};

export default commonStyles;
