import React from "react";
import Image from "next/image";

import { useResponsive } from "~/styles";
import { SITE_PATHS } from "~/config/routing";
import Button from "~/components/Button";

import { IHeroSectionProps } from "./HeroSection.types";
import {
  StyledContainer,
  StyledHeading,
  StyledContent,
  StyledCtaSection,
  StyledHeroImage,
  StyledContentSection,
  StyledImageSection,
} from "./HeroSection.styles";

const HeroSection: React.FC<IHeroSectionProps> = () => {
  const { isScreenSmallerThanTablet } = useResponsive();

  return (
    <StyledContainer>
      <StyledImageSection>
        <StyledHeroImage
          src="assets/images/home-page/hero-section-illustration.svg"
          alt=""
          height={720}
          width={720}
        />
      </StyledImageSection>

      <StyledContentSection>
        <StyledHeading>
          Tailored Recruitment Platform for SaaS Professionals
        </StyledHeading>

        <StyledContent>
          Solving hiring delays and misfits in business roles by going beyond
          resume and job descriptions.
        </StyledContent>

        <StyledCtaSection className="mt-3 mt-md-4">
          <Button
            variant="secondary"
            size={isScreenSmallerThanTablet ? "sm" : "lg"}
            link={SITE_PATHS.BUSINESSES_PAGE}
          >
            Discover Your Next Role
          </Button>
          <Button
            size={isScreenSmallerThanTablet ? "sm" : "lg"}
            link={SITE_PATHS.PROFESSIONALS_PAGE}
          >
            Find Your Next Hire
          </Button>
        </StyledCtaSection>
      </StyledContentSection>
    </StyledContainer>
  );
};

export default HeroSection;
