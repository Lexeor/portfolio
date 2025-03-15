import styled from '@emotion/styled';
import ThemeSwitch from "./ThemeSwitch.tsx";

const Header = () => {
  return (
    <Root>
      <ThemeSwitch/>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  border: 1px solid green;
`;

export default Header;