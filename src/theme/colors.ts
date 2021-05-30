import { Colors } from "./types";

export const baseColors = {
  failure: "#d42c3c",
  primary: "#f4793f",
  primaryBright: "#f4793f",
  primaryDark: "#f4793f",
  secondary: "#F79116",
  success: "#7cb13b",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#fdfafa",
  backgroundDisabled: "#f7e7e6",
  contrast: "#261c13",
  invertedContrast: "#FFFFFF",
  input: "#fffaf7",
  tertiary: "#EFF4F5",
  text: "#452c21",
  textDisabled: "#d6cfcc",
  textSubtle: "#452c21",
  borderColor: "#ebeae9",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #fff7e6 0%, #fff1ea 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
