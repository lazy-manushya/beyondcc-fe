import Image from "next/image";
import { styled } from "styled-components";

import Container from "~/components/Container";
import { screenLargerThan, screenSmallerThan } from "~/styles";

export const StyledHeroImage = styled(Image)`
  ${screenLargerThan.smallMonitor} {
    max-width: 40vw;
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
  ${screenLargerThan.smallMonitor} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
  }
`;
