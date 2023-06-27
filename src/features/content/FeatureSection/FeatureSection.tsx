import React from "react";

import { IFeatureSectionProps } from "./FeatureSection.types";
import {
  StyledContent,
  StyledContentSection,
  StyledHeading,
  StyledImage,
  StyledSection,
} from "./FeatureSection.styles";

const FeatureSection: React.FC<IFeatureSectionProps> = ({
  heading,
  content,
  className,
  image,
  reversed,
}) => {
  return (
    <StyledSection className={className} $reversed={reversed}>
      <StyledImage src={image} alt="" />

      <StyledContentSection>
        <StyledHeading>{heading}</StyledHeading>
        <StyledContent>{content}</StyledContent>
      </StyledContentSection>
    </StyledSection>
  );
};

export default FeatureSection;
