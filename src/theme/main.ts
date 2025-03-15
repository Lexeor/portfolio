export const lightTheme = {
  name: "light",
  colorPrimary: "#2DB897",
  colorPrimaryHover: "#1e7962",
  colorBg: "#ffffff",
  colorText: "#1e1e1e",
  colorSecondaryText: "rgba(30,30,30,0.5)",
  colorTextContrast: "#ffffff",
};

export const darkTheme = {
  name: "dark",
  colorPrimary: "#2DB897",
  colorPrimaryHover: "#1e7962",
  colorBg: "#1e1e1e",
  colorText: "#ffffff",
  colorSecondaryText: "rgba(255,255,255,0.5)",
  colorTextContrast: "#000000",
};

export type ThemeType = typeof lightTheme;
