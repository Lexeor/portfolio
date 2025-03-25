import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { type FC } from "react";
import { transition } from "../utils/transition-styled.ts";
import { type SkillImageItem, type SkillItem } from "./Skils/types.ts";

interface SkillItemProps {
  item: SkillItem;
}

const SkillItem: FC<SkillItemProps> = ({ item }) => {
  const { image, name, link } = item;
  const theme = useTheme();

  const themeName = theme.name as keyof SkillImageItem;

  const _image = typeof image === "string" ? image : image[themeName];

  return (
    <Root isLink={!!link} onClick={() => link && window.open(link)}>
      <Image src={_image} alt={`skill-${name}`} />
      <Name>{name}</Name>
    </Root>
  );
};

const Root = styled("div")<{ isLink: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(p) => p.theme.colorPrimary};
  border-radius: 12px;
  padding: 8px;
  aspect-ratio: 1/1;

  ${(p) =>
    p.isLink &&
    css`
      cursor: pointer;
    `}

  ${transition(["border-color", "background-color"])};

  &:hover {
    border-color: ${(p) => p.theme.colorPrimarySecondary};
    background-color: ${(p) => p.theme.colorBackgroundSecondary};

    p {
      font-weight: 700;
    }

    img {
      transform: scale(1.2);
    }
  }
`;

const Image = styled.img`
  max-width: 32px;
  max-height: 32px;
  transform: scale(1);
  ${transition("transform")};
`;

const Name = styled.p`
  font-size: 12px;
  font-weight: 500;
  ${transition("font-weight")};
`;

export default SkillItem;
