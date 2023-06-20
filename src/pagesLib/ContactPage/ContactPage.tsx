import React from "react";

import Container from "~/components/Container";

import { IPageProps } from "./ContactPage.types";
import { StyledContainer } from "./ContactPage.styles";

const ContactPage: React.FC<IPageProps> = () => {
  return (
    <StyledContainer>
      <Container>ContactPage</Container>
    </StyledContainer>
  );
};

export default ContactPage;
