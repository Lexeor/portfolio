import styled from "@emotion/styled";
import { type FC } from "react";
import { IContactsItem } from "./types.ts";

interface IContactItemProps {
  item: IContactsItem;
}

const getType = (type: IContactsItem["type"]): string => {
  switch (type) {
    case "tel":
      return "tel:";
    case "email":
      return "mailto:";
    default:
      return "";
  }
};

const ContactItem: FC<IContactItemProps> = ({ item }) => {
  return (
    <Root>
      <Label>{item.label}</Label>
      <Value href={`${getType(item.type)}${item.value}`}>{item.value}</Value>
    </Root>
  );
};

const Root = styled.div``;

const Label = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 2px;
  color: ${(p) => p.theme.colorSecondaryText};
`;

const Value = styled.a`
  font-size: 14px;
`;

export default ContactItem;
