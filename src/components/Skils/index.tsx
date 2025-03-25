import styled from "@emotion/styled";
import { type FC } from "react";
import SquareItem from "../SquareItem";
import Subtitle from "../Subtitle";
import Title from "../Title";
import { skillsList } from "./list";

const Skills: FC = () => {
  const { main, additional, dictionary } = skillsList;
  return (
    <Root>
      <Title>Скиллы</Title>
      <Subtitle>Основные</Subtitle>
      <List>
        {main.map((skillItem, index) => (
          <SquareItem item={skillItem} key={`${index}-${skillItem.name}`} />
        ))}
      </List>
      <Subtitle>Дополнительные</Subtitle>
      <List>
        {additional.map((skillItem, index) => (
          <SquareItem item={skillItem} key={`${index}-${skillItem.name}`} />
        ))}
      </List>
      <Subtitle>Разберусь "со словарём"</Subtitle>
      <List>
        {dictionary.map((skillItem, index) => (
          <SquareItem item={skillItem} key={`${index}-${skillItem.name}`} />
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

export default Skills;
