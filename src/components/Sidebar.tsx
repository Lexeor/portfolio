import styled from "@emotion/styled";
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
      <Name>Grant Lawson</Name>
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
  width: 100%;
  height: 100%;
  border-right: 1px solid ${(p) => p.theme.colorPrimary};
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
