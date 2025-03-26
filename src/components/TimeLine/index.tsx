import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FC } from "react";
import routes from "../../utils/routes.ts";
import { transition } from "../../utils/transition-styled.ts";
import { ITimeLineItem } from "./types.ts";

const TimeLineItem: FC<{ item: ITimeLineItem; lastItem?: boolean }> = ({
  item: { dateStart, dateEnd, title, subtitle, description, id },
  lastItem,
}) => {
  return (
    <RootItem onClick={() => location.assign(routes.projects[id])}>
      <Dates about="dates">
        {dateStart.format("MMM YYYY")} -{" "}
        {dateEnd?.format("MMM YYYY") || "Present"}
      </Dates>
      <Line about="line" hideLine={lastItem} />
      <div>
        <Title about="title">{subtitle}</Title>
        <Subtitle>{title}</Subtitle>
        <Desc>{description}</Desc>
      </div>
    </RootItem>
  );
};

const RootItem = styled.div`
  display: grid;
  grid-template-columns: 130px 14px auto;
  width: 100%;
  gap: 8px;
  letter-spacing: -0.48px;
  cursor: pointer;

  &:hover {
    div[about="line"]:after {
      border-color: ${(p) => p.theme.colorPrimary};
      background: ${(p) => p.theme.colorPrimary};
    }

    p[about="title"],
    p[about="dates"] {
      color: ${(p) => p.theme.colorPrimary};
    }
  }
`;

interface ITimeLine {
  items: ITimeLineItem[];
}

const TimeLine: FC<ITimeLine> = ({ items }) => {
  return (
    <Root>
      {items.map((item, index) => (
        <TimeLineItem
          key={`${item.title}-${index}`}
          item={item}
          lastItem={index === items.length - 1}
        />
      ))}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const Line = styled("div")<{ hideLine?: boolean }>`
  position: relative;
  width: 1px;
  height: 113%;
  background-color: ${(p) => p.theme.colorText}80;
  display: flex;
  flex-direction: column;
  flex: 1;
  transform: translateX(4px) translateY(-10px);

  ${transition("background-color")};

  ${(p) =>
    p.hideLine &&
    css`
      height: 20px;
    `};

  &:after {
    position: absolute;
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    background-color: ${(p) => p.theme.colorBg};
    border-radius: 50%;
    border: 2px solid ${(p) => p.theme.colorText};

    ${transition(["background-color", "border"])};
  }

  &:after {
    top: 2px;
    transform: translateX(-5px) translateY(10px);
  }
`;

const Dates = styled.p`
  font-size: 0.8em;
`;

const Desc = styled.p``;

const Title = styled.p`
  font-weight: 700;
`;

const Subtitle = styled.p`
  margin-bottom: 4px;
  color: ${(p) => p.theme.colorText}80;
  font-size: 0.8em;
  ${transition("color")};
`;

export default TimeLine;
