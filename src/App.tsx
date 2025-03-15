import styled from "@emotion/styled";
import dayjs from "dayjs";
import Sidebar from "./components/Sidebar.tsx";
import TimeLine from "./components/TimeLine.tsx";
import { LAYOUT_WIDTH } from "./constants.ts";
import { ThemeProvider } from "./theme/ThemeProvider.tsx";

const workplaceItems = [
  {
    dateStart: dayjs("2022-08-22"),
    title: "Frontend Engineer",
    subtitle: "Treenity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi autem beatae debitis delectus dolor, eum\n" +
      "        fugiat fugit in ipsam molestias non obcaecati officia quas quo rerum velit veritatis voluptates.",
  },
  {
    dateStart: dayjs("2022-08-22"),
    dateEnd: dayjs("2022-08-22"),
    title: "Junior Frontend Engineer",
    subtitle: "Treenity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi autem beatae debitis delectus dolor, eum\n" +
      "        fugiat fugit in ipsam molestias non obcaecati officia quas quo rerum velit veritatis voluptates.",
  },
  {
    dateStart: dayjs("2020-04-21"),
    dateEnd: dayjs("2022-08-22"),
    title: "Old place",
    subtitle: "Engineer",
    description:
      "OLD Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi autem beatae debitis delectus dolor, eum\n" +
      "        fugiat fugit in ipsam molestias non obcaecati officia quas quo rerum velit veritatis voluptates.",
  },
];

function App() {
  return (
    <ThemeProvider>
      <AppRoot>
        <Sidebar />
        <Content>
          <TimeLine items={workplaceItems} />
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
  width: 100%;
  padding: 12px 16px;
`;

export default App;
