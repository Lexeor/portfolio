import { css, SerializedStyles } from "@emotion/react";
import { TRANSITION_TIMING_DEFAULT } from "../constants.ts";

interface ITransition {
  (property: string | string[], timingFunction?: string): SerializedStyles;
}

export const transition: ITransition = (
  property,
  timingFunction,
): SerializedStyles => {
  return css`
    transition-property: ${typeof property !== "string"
      ? property.join(", ")
      : property};
    transition-timing-function: ${timingFunction || TRANSITION_TIMING_DEFAULT};
    transition-duration: 0.3s;
  `;
};
