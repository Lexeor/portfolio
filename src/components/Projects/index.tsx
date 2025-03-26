import styled from "@emotion/styled";
import { type FC } from "react";
import TimeLine from "../TimeLine";
import Title from "../Title";
import workplaceItems from "./list";

const Projects: FC = () => {
  return (
    <Root>
      <Title>Проекты</Title>
      <TimeLine items={workplaceItems} />
    </Root>
  );
};

const Root = styled.div`
  max-width: 690px;
`;

export default Projects;
