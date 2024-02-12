import Link from "next/link";
import styled from "styled-components";

export const StyledLogo = styled(Link)`
  --width: 128px;
  --height: 3rem;

  background: url("/assets/images/branding/logo.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: var(--width);
  height: var(--height);
  min-width: var(--width);
  min-height: var(--height);
`;
