import React from "react";

import Container from "~/components/Container";

import { IPageProps } from "./PricingPage.types";
import { StyledContainer } from "./PricingPage.styles";

const PricingPage: React.FC<IPageProps> = () => {
  return (
    <StyledContainer>
      <Container>PricingPage</Container>
    </StyledContainer>
  );
};

export default PricingPage;
