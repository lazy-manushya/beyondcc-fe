import Link from "next/link";
import { styled } from "styled-components";

import { IStyledAppLogoProps } from "./AppLogo.types";

export const StyledAppLogo = styled(Link)<IStyledAppLogoProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none !important;
  font-size: 32px;
  font-weight: 900;
  padding: 8px;
  color: ${({ $variant }) =>
    $variant === "white" ? "#fff" : "var(--clr-accent)"}!important;
  background: var(--clr-primary);
`;
