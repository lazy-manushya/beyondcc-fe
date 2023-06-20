import { styled } from "styled-components";

import { screenSmallerThan } from "~/styles";

import {
  BUTTON_SIZE_CONFIG,
  BUTTON_VARAINT_CONFIG,
  DEFAULT_BUTTON_VARIANT,
  DEFAULT_COLOR_VARIANT,
  DEFAULT_BUTTON_SIZE,
} from "./constants";
import { IStyledButtonProps } from "./Button.types";

export const StyledButton = styled.button<IStyledButtonProps>`
  --color: ${({
    variant = DEFAULT_BUTTON_VARIANT,
    colorVariant = DEFAULT_COLOR_VARIANT,
  }) => {
    return BUTTON_VARAINT_CONFIG[colorVariant][variant].color;
  }};
  --border-color: ${({
    variant = DEFAULT_BUTTON_VARIANT,
    colorVariant = DEFAULT_COLOR_VARIANT,
  }) => BUTTON_VARAINT_CONFIG[colorVariant][variant].borderColor};
  --bg-color: ${({
    variant = DEFAULT_BUTTON_VARIANT,
    colorVariant = DEFAULT_COLOR_VARIANT,
  }) => BUTTON_VARAINT_CONFIG[colorVariant][variant].bgColor};

  padding: ${({ size = DEFAULT_BUTTON_SIZE }) =>
    BUTTON_SIZE_CONFIG[size].padding};
  font-size: ${({ size = DEFAULT_BUTTON_SIZE }) =>
    BUTTON_SIZE_CONFIG[size].fontSize};
  text-decoration: none;
  border-radius: var(--border-radius-md);
  border: 2px solid var(--border-color);
  color: var(--color);
  background-color: var(--bg-color);
  
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-width: fit-content;

  transition: width, filter, 240ms ease-in-out;

  &:disabled {
    filter: grayscale(0.5);
    cursor: not-allowed;
  }
`;
