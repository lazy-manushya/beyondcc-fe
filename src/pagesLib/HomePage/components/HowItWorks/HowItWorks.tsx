import React from "react";

import { IHowItWorksProps } from "./HowItWorks.types";
import {
  StepsHeading,
  StepsList,
  StepsListItem,
  StyledContainer,
} from "./HowItWorks.styles";
import { Container } from "reactstrap";

const HowItWorks: React.FC<IHowItWorksProps> = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <Container>
        <StepsHeading>Our Simple and Efficient Process</StepsHeading>

        <StepsList className="mt-5">
          <StepsListItem>
            <b>1</b>Create your Profile
          </StepsListItem>
          <StepsListItem>
            <b>2</b>Get Matched
          </StepsListItem>
          <StepsListItem>
            <b>3</b>Secure Your Role
          </StepsListItem>
        </StepsList>
      </Container>
    </StyledContainer>
  );
};

export default HowItWorks;
