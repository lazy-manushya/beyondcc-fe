import Link from "next/link";
import styled from "styled-components";

import Container from "~/components/layout/Container";

export const StyledHeader = styled.header`
  padding-inline: 1rem;
  padding-block: 1.5rem;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const StyledNav = styled.nav`
  display: flex;
  margin-right: auto;

  ul {
    display: flex;
    gap: 0.5rem;
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  padding: 0.5rem 0.75rem;
  color: inherit;
`;
