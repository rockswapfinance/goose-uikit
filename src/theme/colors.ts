import { Colors } from "./types";

export const baseColors = {
  failure: "#E84349",
  primary: "#A86C47",
  primaryBright: "#aa8929",
  primaryDark: "#aa8929",
  secondary: "#7645D9",
  success: "#17B664",
  warning: "#FFDF4C",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#fff",
  backgroundDisabled: "#c2c2c2",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#ececec",
  tertiary: "#ececec",
  text: "#000000",
  textDisabled: "#BDC2C4",
  textSubtle: "#757575",
  borderColor: "#000000",
  card: "#ececec",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#7645D9",
  background: "#fff",
  backgroundDisabled: "#c2c2c2",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#ececec",
  primaryDark: "#A86C47",
  tertiary: "#ececec",
  text: "#000000",
  textDisabled: "#BDC2C4",
  textSubtle: "#757575",
  borderColor: "#000000",
  card: "#ececec",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
