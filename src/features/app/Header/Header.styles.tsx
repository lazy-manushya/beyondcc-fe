import Link from "next/link";
import { styled } from "styled-components";

import Container from "~/components/Container";

//----------------------

export const StyledLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  display: inline-flex;
  padding: 8px;
  font-weight: 600;
  color: var(--clr-text) !important;
`;

export const StyledHeaderNav = styled.nav`
  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
`;

//----------------------

export const StyledHeader = styled.header`
  height: var(--header-height);
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const StyledContentHeader = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
`;
