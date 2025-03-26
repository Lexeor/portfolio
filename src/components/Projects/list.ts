import dayjs from "dayjs";
import { TimeLineId } from "../TimeLine/types";

const workplaceItems = [
  {
    dateStart: dayjs("2023-06"),
    title: "Frontend Engineer",
    id: "treenity" as TimeLineId,
    subtitle: "Treenity",
    description: "Онлайн-конструктор сайтов",
  },
  {
    dateStart: dayjs("2023-02"),
    title: "Frontend Engineer",
    id: "kvarum" as TimeLineId,
    subtitle: "Kvarum",
    description:
      "Приложение для создания расписаний и эффективного планирования для повышения конверсии продаж.",
  },
  {
    dateStart: dayjs("2023-01"),
    dateEnd: dayjs("2023-06"),
    title: "Frontend Engineer",
    id: "kortros" as TimeLineId,
    subtitle: "Kortros",
    description: "Корпоративный сайт девелоперской компании КОРТРОС",
  },
  {
    dateStart: dayjs("2022-10"),
    dateEnd: dayjs("2023-01"),
    title: "Frontend Engineer",
    id: "darwin" as TimeLineId,
    subtitle: "Darwin",
    description: "Сайт финансовой организации",
  },
  {
    dateStart: dayjs("2022-02"),
    dateEnd: dayjs("2022-10"),
    title: "Frontend Engineer",
    id: "cryptoFairies" as TimeLineId,
    subtitle: "Crypto fairies",
    description: "Сайт финансовой организации",
  },
  {
    dateStart: dayjs("2021-08"),
    dateEnd: dayjs("2022-02"),
    title: "Frontend Engineer",
    id: "jetup" as TimeLineId,
    subtitle: "Jetup",
    description: "Сайт финансовой организации",
  },
  {
    dateStart: dayjs("2021-03"),
    dateEnd: dayjs("2021-08"),
    title: "Frontend Engineer",
    id: "trustCar" as TimeLineId,
    subtitle: "Trust Car",
    description: "Сервис аренды автомобилей",
  },
  {
    dateStart: dayjs("2019-09"),
    dateEnd: dayjs("2021-03"),
    title: "Frontend Engineer",
    id: "izoneum" as TimeLineId,
    subtitle: "Izoneum",
    description: "Сайт финансовой организации",
  },
];

export default workplaceItems;
