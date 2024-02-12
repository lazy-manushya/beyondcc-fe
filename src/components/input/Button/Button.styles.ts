import styled from "styled-components";

import { screenSmallerThan } from "~/styles";

import {
  BUTTON_VARAINT_CONFIG,
  DEFAULT_BUTTON_VARIANT,
  DEFAULT_COLOR_VARIANT,
} from "./Button.config";
import { IStyledButtonProps } from "./Button.types";

export const StyledButton = styled.button<IStyledButtonProps>`
  --color: ${({
    $variant = DEFAULT_BUTTON_VARIANT,
    $colorVariant = DEFAULT_COLOR_VARIANT,
  }) => {
    return BUTTON_VARAINT_CONFIG[$colorVariant][$variant].color;
  }};
  --border-color: ${({
    $variant = DEFAULT_BUTTON_VARIANT,
    $colorVariant = DEFAULT_COLOR_VARIANT,
  }) => BUTTON_VARAINT_CONFIG[$colorVariant][$variant].borderColor};
  --bg-color: ${({
    $variant = DEFAULT_BUTTON_VARIANT,
    $colorVariant = DEFAULT_COLOR_VARIANT,
  }) => BUTTON_VARAINT_CONFIG[$colorVariant][$variant].bgColor};

  padding: 0.5rem;
  text-decoration: none;
  border-radius: 2px;
  border: 2px solid var(--border-color);
  color: var(--color);
  background-color: var(--bg-color);
  min-height: ${({ $variant }) =>
    $variant === "ghost" ? "unset" : "var(--input-height)"};

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  min-width: fit-content;
  cursor: pointer;

  transition: width, filter, 240ms ease-in-out;

  &:disabled {
    filter: grayscale(0.5);
    cursor: not-allowed;
  }

  ${screenSmallerThan.largeMobile} {
    padding: 8px;
    font-size: 16px;
  }
`;
