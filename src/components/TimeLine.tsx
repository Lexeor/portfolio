import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Dayjs } from "dayjs";
import { FC, ReactNode } from "react";
import { transition } from "../utils/transition-styled.ts";

interface ITimeLineItem {
  dateStart: Dayjs;
  dateEnd?: Dayjs;
  title: string;
  subtitle?: string;
  description: string | ReactNode;
  lastItem?: boolean;
}

const TimeLineItem: FC<{ item: ITimeLineItem; lastItem?: boolean }> = ({
  item: { dateStart, dateEnd, title, subtitle, description },
  lastItem,
}) => {
  return (
    <RootItem>
      <Dates>
        {dateStart.format("MMM YYYY")} -{" "}
        {dateEnd?.format("MMM YYYY") || "Present"}
      </Dates>
      <Line hideLine={lastItem} />
      <div>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {description}
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
`;

interface ITimeLine {
  items: ITimeLineItem[];
}

const TimeLine: FC<ITimeLine> = ({ items }) => {
  return (
    <Root>
      {items.map((item, index) => (
        <TimeLineItem
          key={item.title}
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
  height: 110%;
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

  &:hover {
    &:after {
      background-color: ${(p) => p.theme.colorText};
    }
  }

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

const Dates = styled.div`
  font-size: 0.8em;
`;

const Title = styled.div`
  font-weight: 700;
`;

const Subtitle = styled.div`
  margin-bottom: 4px;
  color: ${(p) => p.theme.colorText}80;
  font-size: 0.8em;
  ${transition("color")};
`;

export default TimeLine;
