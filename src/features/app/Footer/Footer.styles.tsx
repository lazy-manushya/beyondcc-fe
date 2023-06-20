import Link from "next/link";
import { styled } from "styled-components";

import { screenLargerThan, screenSmallerThan } from "~/styles";
import Container from "~/components/Container";

//----------------------

export const StyledLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  display: inline-flex;
  padding: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #fff !important;
`;

//----------------------

export const StyledSocialSectionHeading = styled.h3`
  font-size: 16px;
  text-align: center;
`;

export const StyledSocialSection = styled.nav`
  align-self: center;

  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  ${StyledLink} {
    font-size: 20px;
  }
`;

//----------------------

export const StyledFooterNav = styled.nav`
  max-width: 480px;

  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

//----------------------

export const StyledFooter = styled.footer`
  background: var(--clr-text);
  color: #fff;
  padding: 1em 0;

  ${screenLargerThan.tablet} {
    padding: 2rem 0;
  }
`;

export const StyledContentContainer = styled(Container)`
  ${screenLargerThan.tablet} {
    display: flex;
    justify-content: space-between;
  }
`;
