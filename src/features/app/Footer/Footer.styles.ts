import Link from "next/link";
import styled from "styled-components";

import { screenLargerThan, screenSmallerThan } from "~/styles";

export const StyledFooter = styled.footer`
  padding-inline: 1rem;
  padding-block: 1.5rem;
  background: #f5f5f5;
`;

export const StyledTopContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  ${screenSmallerThan.tablet} {
    flex-direction: column;
  }

  ${screenLargerThan.tablet} {
    gap: 4rem;
  }
`;

export const StyledNav = styled.nav`
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

export const StyledSiteNav = styled(StyledNav)`
  flex-grow: 1;
  margin-bottom: 2rem;

  & > ul {
    display: flex;
    flex-wrap: wrap;
  }

  & > ul > li {
    flex-grow: 1;
    width: 50%;
    margin-bottom: 1rem;
  }

  li {
    display: block;
  }

  li > ul > li {
    padding: 0.5rem;

    &:first-child {
      font-weight: 600;
    }
  }

  ${screenLargerThan.tablet} {
    margin-bottom: 4rem;

    & > ul > li {
      width: 25%;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
`;

export const StyledBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  ${screenLargerThan.tablet} {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
`;

export const StyledSocialNav = styled(StyledNav)`
  ul {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }
`;

export const StyledCopyrightText = styled.small``;

export const StyledSocialLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2rem;
`;
