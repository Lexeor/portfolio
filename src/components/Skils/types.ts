export interface SkillImageItem {
  light: string;
  dark: string;
}

export interface SkillItem {
  image: string | SkillImageItem;
  name: string;
  link?: string;
}
