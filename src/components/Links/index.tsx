import styled from "@emotion/styled";
import { type FC } from "react";
import SquareItem from "../SquareItem";
import Title from "../Title";
import { linksList } from "./list";

const Links: FC = () => {
  return (
    <Root>
      <Title>Ссылки</Title>
      <List>
        {linksList.map((linkItem, index) => (
          <SquareItem item={linkItem} key={`${index}-${linkItem.name}`} />
        ))}
      </List>
    </Root>
  );
};

const Root = styled.div``;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(82px, 1fr));
  gap: 10px;
  margin-bottom: 24px;
`;

export default Links;
