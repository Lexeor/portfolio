import styled from "@emotion/styled";
import Projects from "./components/Projects/index.tsx";
import Sidebar from "./components/Sidebar.tsx";
import Skills from "./components/Skils/index.tsx";
import { LAYOUT_WIDTH } from "./constants.ts";
import { ThemeProvider } from "./theme/ThemeProvider.tsx";

function App() {
  return (
    <ThemeProvider>
      <AppRoot>
        <Sidebar />
        <Content>
          <Skills />
          <Projects />
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
`;

export default App;
