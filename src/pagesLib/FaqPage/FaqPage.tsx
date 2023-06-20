import React from "react";

import Container from "~/components/Container";

import { IPageProps } from "./FaqPage.types";
import { StyledContainer } from "./FaqPage.styles";

const FaqPage: React.FC<IPageProps> = () => {
  return (
    <StyledContainer>
      <Container>FaqPage</Container>
    </StyledContainer>
  );
};

export default FaqPage;
