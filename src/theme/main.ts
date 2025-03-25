export const lightTheme = {
  name: "light",
  colorPrimary: "#178749",
  colorPrimarySecondary: "#157740",
  colorPrimaryHover: "#157740",
  colorBackground: "#FFFFFF",
  colorBackgroundSecondary: "#FAFAFA",
  colorBg: "#ffffff",
  colorText: "#1e1e1e",
  colorSecondaryText: "rgba(30,30,30,0.5)",
  colorTextContrast: "#ffffff",
};

export const darkTheme = {
  name: "dark",
  colorPrimary: "#178749",
  colorPrimarySecondary: "#157740",
  colorPrimaryHover: "#157740",
  colorBackground: "#262626",
  colorBackgroundSecondary: "#1F1F1F",
  colorBg: "#1e1e1e",
  colorText: "#ffffff",
  colorSecondaryText: "rgba(255,255,255,0.5)",
  colorTextContrast: "#000000",
};

export type ThemeType = typeof lightTheme;
