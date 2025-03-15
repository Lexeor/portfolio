import styled from "@emotion/styled";
import Header from "./Header.tsx";

const Sidebar = () => {
  return (
    <Root>
      <Header />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  height: 100%;
  border: 1px solid yellow;
`;

export default Sidebar;
