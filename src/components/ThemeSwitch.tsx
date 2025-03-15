import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useTheme } from "../theme/ThemeProvider.tsx";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme.name === "dark";

  const sunRays = Array.from({ length: 8 }).map((_, i) => (
    <SunRay key={i} index={i} />
  ));

  return (
    <Button onClick={toggleTheme}>
      <div>
        <Sphere>
          <Shadow dark={isDark} />
          {sunRays}
        </Sphere>
      </div>
    </Button>
  );
};

const Button = styled.button`
  position: relative;
  border: 0;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  & > div {
    transition: transform 0.3s ease-in-out;
  }

  &:focus {
    outline: none;
  }

  &:hover > div {
    transform: rotateZ(-15deg);
  }
`;

const Sphere = styled.div`
  position: relative;
  width: 12px;
  height: 12px;
  background-color: ${(p) => p.theme.colorText};
  border-radius: 50%;
  transform-origin: center;

  ${(p) =>
    p.theme.name === "dark" &&
    css`
      width: 14px;
      height: 14px;
    `};

  transition-property: background-color, color, width, height;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

const SunRay = styled.div<{ index: number }>`
  position: absolute;
  width: 4px;
  height: 2px;
  background-color: ${(p) => p.theme.colorText};
  border-radius: 2px;
  top: 50%;
  left: 50%;
  transform-origin: center;

  transition-property: background-color, color, transform, width;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.9, 0, 0.3, 1);

  ${(p) => css`
    transform: translate(-50%, -50%) rotate(${p.index * 45}deg) translateX(10px);
  `}

  ${(p) =>
    p.theme.name === "dark" &&
    css`
      width: 0;
    `};
`;

const Shadow = styled.div<{ dark?: boolean }>`
  width: 16px;
  height: 16px;
  background-color: ${(p) => p.theme.colorBg};
  border-radius: 50%;
  transform: translateX(12px) translateY(4px) scale(0);
  z-index: 3;

  transition-property: background-color, color, transform;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  ${(p) =>
    p.dark &&
    css`
      opacity: 1;
      transform: translateX(4px) translateY(-4px) scale(1);
    `};
`;

export default ThemeSwitch;
