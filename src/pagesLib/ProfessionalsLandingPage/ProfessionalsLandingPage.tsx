import React from "react";

import Container from "~/components/Container";

import { IPageProps } from "./ProfessionalsLandingPage.types";
import { StyledContainer } from "./ProfessionalsLandingPage.styles";

const ProfessionalsPage: React.FC<IPageProps> = () => {
  return (
    <StyledContainer>
      <Container>
        <h2>Why Choose Beyondcc: The Right Fit for Your Skills</h2>
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

export default ProfessionalsPage;
