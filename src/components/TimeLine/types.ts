import { Dayjs } from "dayjs";
import { ReactNode } from "react";
import routes from "../../utils/routes";

export type TimeLineId = keyof typeof routes.projects;

export interface ITimeLineItem {
  dateStart: Dayjs;
  dateEnd?: Dayjs;
  title: string;
  id: TimeLineId;
  subtitle?: string;
  description: string | ReactNode;
  lastItem?: boolean;
}
