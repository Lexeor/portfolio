import styled from "@emotion/styled";
import About from "./components/About";
import Links from "./components/Links";
import Projects from "./components/Projects";
import Recommendations from "./components/Recommendations";
import Sidebar from "./components/Sidebar.tsx";
import Skills from "./components/Skils";
import { LAYOUT_WIDTH } from "./constants.ts";
import { ThemeProvider } from "./theme/ThemeProvider.tsx";
import { transition } from "./utils/transition-styled.ts";

function App() {
  return (
    <ThemeProvider>
      <AppRoot>
        <Sidebar />
        <Content>
          <About />
          <Skills />
          <Projects />
          <Links />
          <Recommendations />
        </Content>
      </AppRoot>
    </ThemeProvider>
  );
}

const AppRoot = styled.div`
  max-width: 1280px;
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns: 240px auto;

  @media (max-width: ${LAYOUT_WIDTH.MD}) {
    grid-template-columns: auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  background: ${(p) => p.theme.colorBackground};

  ${transition("background")};
`;

export default App;
