import styled from "@emotion/styled";
import { type FC } from "react";
import copyToClipboard from "../../utils/copy-to-clipboard.tsx";
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

const onCopy = (value: string) => {
  copyToClipboard(value).then(() => {
    // successMessage(`Copy ${type}`);
  });
};

const ContactItem: FC<IContactItemProps> = ({ item }) => {
  return (
    <Root>
      <Header>
        <Label>{item.label}:</Label>
        <CopyButton onClick={() => onCopy(item.value)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.99997 14.4001L3.59997 14.4001C2.93723 14.4001 2.39998 13.8628 2.39998 13.2001L2.39998 4.4001C2.39998 3.29553 3.29541 2.4001 4.39998 2.4001L13.2 2.4001C13.8627 2.4001 14.4 2.93736 14.4 3.6001L14.4 6.0001M12 21.6001L19.2 21.6001C20.5255 21.6001 21.6 20.5256 21.6 19.2001L21.6 12.0001C21.6 10.6746 20.5255 9.6001 19.2 9.6001L12 9.6001C10.6745 9.6001 9.59998 10.6746 9.59998 12.0001L9.59997 19.2001C9.59997 20.5256 10.6745 21.6001 12 21.6001Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </CopyButton>
      </Header>
      <Value href={`${getType(item.type)}${item.value}`}>{item.value}</Value>
    </Root>
  );
};

const Root = styled.div``;

const CopyButton = styled.div`
  color: ${(p) => p.theme.colorPrimary};
  cursor: pointer;

  svg {
    width: 12px;
    height: 12px;
  }
`;

const Header = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-bottom: 2px;
`;

const Label = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(p) => p.theme.colorSecondaryText};
`;

const Value = styled.a`
  font-size: 14px;
`;

export default ContactItem;
