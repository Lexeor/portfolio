import styled from "@emotion/styled";
import { transition } from "../utils/transition-styled.ts";
import Contacts from "./Contacts/index.tsx";
import Header from "./Header.tsx";

const DEFAULT_CONTACTS = [
  {
    label: "Telephone",
    value: "+44 1632 960515",
    type: "tel",
  },
  {
    label: "Email",
    value: "hello@granthudison.co.uk",
    type: "email",
  },
  {
    label: "Website",
    value: "www.granthudson.co.uk",
  },
];

const Sidebar = () => {
  return (
    <Root>
      <Header />
      <Photo>
        <img src="/image/photo.jpeg" alt="photo image" />
      </Photo>
      <Name>Evgenii Kolesnik</Name>
      <Position>Frontend Engineer</Position>
      <Contacts list={DEFAULT_CONTACTS} />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  border-right: 1px solid ${(p) => p.theme.colorPrimary};
  background: ${(p) => p.theme.colorBackgroundSecondary};

  ${transition(["background", "border-color"])};
`;

const Photo = styled.div`
  width: 146px;
  height: 146px;
  border: 3px solid ${(p) => p.theme.colorPrimary};
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const Name = styled.p`
  color: ${(p) => p.theme.colorText};
  font-size: 20px;
`;

const Position = styled.p`
  color: ${(p) => p.theme.colorSecondaryText};
  font-size: 16px;
`;

export default Sidebar;
