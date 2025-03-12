import {createContext, ReactNode, useContext, useState} from "react";
import {Global, ThemeProvider as EmotionThemeProvider} from "@emotion/react";
import {darkTheme, lightTheme, ThemeType} from "./main";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({children}: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <EmotionThemeProvider theme={theme}>
        <Global styles={(theme: any) => ({
          html: {
            backgroundColor: theme.colorBg,
            color: theme.colorText,
          },
        })}/>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
