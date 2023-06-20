import React from "react";

import Container from "~/components/Container";

import { IPageProps } from "./BusinessesLandingPage.types";
import { StyledContainer } from "./BusinessesLandingPage.styles";

const BusinessesLandingPage: React.FC<IPageProps> = () => {
  return (
    <StyledContainer>
      <Container>
        <h2>Why Choose Beyondcc: Precision Hiring at Your Fingertips</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          magni ipsa neque delectus esse error doloribus recusandae expedita
          perspiciatis a labore vero, alias amet sed exercitationem deleniti
          aliquid atque perferendis.
        </p>

        <h2>Our Simple and Efficient Process</h2>
      </Container>
    </StyledContainer>
  );
};

export default BusinessesLandingPage;
