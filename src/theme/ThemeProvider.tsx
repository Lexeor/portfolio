import {
  Global,
  Theme,
  ThemeProvider as EmotionThemeProvider,
} from "@emotion/react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { darkTheme, lightTheme, ThemeType } from "./main";
import { TRANSITION_TIMING_DEFAULT } from "../constants.ts";

const THEME_STORAGE_KEY = "data-theme";

interface ThemeContextType {
  theme: Theme;
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

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      return storedTheme === "dark";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
  }, [isDark]);

  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => setIsDark((prev) => !prev);

  const [transition, setTransition] = useState<string>("no-transition");
  useEffect(() => {
    setTimeout(
      () =>
        setTransition(
          `background-color 0.3s ${TRANSITION_TIMING_DEFAULT}, color 0.3s ${TRANSITION_TIMING_DEFAULT}, border 0.3s ${TRANSITION_TIMING_DEFAULT}`,
        ),
      300,
    );
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <EmotionThemeProvider theme={theme}>
        <Global
          styles={(theme: ThemeType) => ({
            html: {
              backgroundColor: theme.colorBg,
              color: theme.colorText,
              transition: transition,
            },
            body: {
              fontFamily: `"Inter", sans-serif`,
              margin: 0,
              position: "relative",
              display: "flex",
              minWidth: "320px",
              minHeight: "100vh",
            },
            p: {
              margin: 0,
              padding: 0,
            },
            a: {
              color: theme.colorPrimary,
            },
            "#root": {
              maxWidth: "1280px",
              width: "100%",
              margin: "0 auto",
            },
          })}
        />
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
