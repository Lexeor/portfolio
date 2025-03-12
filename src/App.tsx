import styled from "@emotion/styled";
import Header from './components/Header';
import {ThemeProvider} from "./theme/ThemeProvider.tsx";

function App() {
  return (
    <ThemeProvider>
      <Root>
        <Header/>
      </Root>
    </ThemeProvider>
  )
}

const Root = styled.div`
  max-width: 1280px;
  width: 100%;
`;

export default App
