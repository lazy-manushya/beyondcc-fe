import React from "react";
import { Container } from "reactstrap";

import { IWhyUsSectionProps } from "./WhyUsSection.types";
import {
  StyledContainer,
  StyledImage,
  StyledSection,
} from "./WhyUsSection.styles";

const WhyUsSection: React.FC<IWhyUsSectionProps> = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <div className="h-100">
          <h2>Why Beyondcc? We're the Future of Skill Based Hiring</h2>
          <p>
            Beyondcc is the future of objective-based hiring. We understand that
            each job requires a unique set of skills and qualifications, and
            that conventional recruitment processes often fall short.
          </p>

          <p>
            To address this, we delve deep into job descriptions and candidates'
            backgrounds to provide precision matchmaking for business
            professionals. Our goal is to reduce subjectivity in hiring and
            minimize the occurrence of wrong hires, saving companies time and
            resources.
          </p>
        </div>

        <StyledImage >Image</StyledImage>
      </StyledContainer>
    </StyledSection>
  );
};

export default WhyUsSection;
