import styled from "@emotion/styled";
import ThemeSwitch from "./ThemeSwitch.tsx";

const Header = () => {
  return (
    <Root>
      <ThemeSwitch />
    </Root>
  );
};

const Root = styled.div`
  justify-content: center;
`;

export default Header;
