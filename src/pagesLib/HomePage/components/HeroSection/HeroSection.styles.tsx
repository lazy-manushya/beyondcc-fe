import Image from "next/image";
import { styled } from "styled-components";

import Container from "~/components/Container";
import {
  getViewPortHeightCssString,
  screenLargerThan,
  screenSmallerThan,
} from "~/styles";

export const StyledHeroImage = styled(Image)`
  ${screenLargerThan.smallMonitor} {
    max-width: 30vw;
    flex: 1;
  }

  ${screenSmallerThan.smallMonitor} {
    max-width: 100%;
    max-height: 25vh;
    height: unset;
  }
`;

export const StyledHeading = styled.h1`
  font-weight: 600;

  ${screenLargerThan.tablet} {
    font-size: 56px;
  }
`;

export const StyledImageSection = styled.div`
  display: grid;
  place-content: center;
  padding: 0 3rem;
`;

export const StyledContentSection = styled.div`
  padding: 0 3rem;
`;

export const StyledContent = styled.p`
  font-weight: 500;

  ${screenLargerThan.tablet} {
    font-size: 18px;
  }
`;

export const StyledCtaSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;

  ${screenLargerThan.tablet} {
    gap: 1.5rem;
  }
`;

export const StyledContainer = styled(Container)`
  min-height: ${getViewPortHeightCssString(100, "- var(--header-height)")};

  ${screenLargerThan.smallMonitor} {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > * {
      flex: 1;
    }
  }
`;
