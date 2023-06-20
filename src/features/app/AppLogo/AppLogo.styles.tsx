import Link from "next/link";
import { styled } from "styled-components";

import { IStyledAppLogoProps } from "./AppLogo.types";

export const StyledAppLogo = styled(Link)<IStyledAppLogoProps>`
  display: inline-block;
  text-decoration: none !important;
  font-size: 24px;
  font-weight: 900;
  color: ${({ $variant }) =>
    $variant === "white" ? "#fff" : "var(--clr-text)"}!important;
`;
