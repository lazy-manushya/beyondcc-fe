import React from "react";

import Container from "~/components/Container";

import HeroSection from "./components/HeroSection";
import WhyUsSection from "./components/WhyUsSection";
import { IHomePageProps } from "./HomePage.types";
import { StyledContainer, StyledFeatureSection } from "./HomePage.styles";
import { FEATURE_SECTIONS } from "./HomePage.config";
import HowItWorks from "./components/HowItWorks/HowItWorks";

const HomePage: React.FC<IHomePageProps> = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <HeroSection />

      <WhyUsSection />
      <Container className="mt-5">
        {FEATURE_SECTIONS.map((item, i) => (
          <StyledFeatureSection
            key={i}
            heading={item.heading}
            content={item.content || item.employeeContent}
            reversed={i % 2 !== 0}
          />
        ))}
      </Container>

      <HowItWorks className="mt-5" />

      {/* <h2>Hear from Satisfied Professionals and Businesses</h2> */}
    </StyledContainer>
  );
};

export default HomePage;
