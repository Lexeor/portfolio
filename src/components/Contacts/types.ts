export interface IContactsItem {
  label: string;
  value: string;
  type?: string;
}

export interface IContactsProps {
  list: IContactsItem[];
}
