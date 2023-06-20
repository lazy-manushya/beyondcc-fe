import React from "react";

import Container from "~/components/Container";

import { IPageProps } from "./AboutUsPage.types";
import { StyledContainer } from "./AboutUsPage.styles";

const AboutUsPage: React.FC<IPageProps> = () => {
  return (
    <StyledContainer>
      <Container>
        <h2>
          Detail the history of Beyondcc, including why and how it was founded.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto
          porro excepturi, consequuntur tempora expedita, voluptas, sint placeat
          tempore illum facere magnam. Culpa fugit commodi sint illo
          exercitationem laboriosam dolorum!
        </p>

        <h2>Our Mission: Redefine SaaS Recruitment </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto
          porro excepturi, consequuntur tempora expedita, voluptas, sint placeat
          tempore illum facere magnam. Culpa fugit commodi sint illo
          exercitationem laboriosam dolorum!
        </p>

        <h2>Meet Our Team</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto
          porro excepturi, consequuntur tempora expedita, voluptas, sint placeat
          tempore illum facere magnam. Culpa fugit commodi sint illo
          exercitationem laboriosam dolorum!
        </p>
      </Container>
    </StyledContainer>
  );
};

export default AboutUsPage;
