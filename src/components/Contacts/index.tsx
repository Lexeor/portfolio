import styled from "@emotion/styled";
import { type FC } from "react";
import ContactItem from "./item";
import { IContactsProps } from "./types.ts";

const Contacts: FC<IContactsProps> = ({ list }) => {
  return (
    <Root>
      {list.map((contactItem) => (
        <ContactItem item={contactItem} />
      ))}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export default Contacts;
