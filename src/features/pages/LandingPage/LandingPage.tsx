import React from "react";

import Container from "~/components/layout/Container";

import {
  StyledCard,
  StyledCardContainer,
  StyledCardHeading,
  Styledheading,
} from "./LandingPage.styles";
import Button from "~/components/input/Button";
import { SITE_LINKS } from "~/config/links";

const LandingPage: React.FC = () => {
  return (
    <div>
      <Container>
        <Styledheading>
          Where <b>startups</b> find talent, & <b>talents</b> find purpose
        </Styledheading>

        <StyledCardContainer>
          <StyledCard>
            <StyledCardHeading>Match with Top Startups</StyledCardHeading>
            <Button link={SITE_LINKS.CANDIDATES_LANDING_PAGE}>
              Explore opportunities
            </Button>
          </StyledCard>

          <StyledCard>
            <StyledCardHeading>Connect with Great Minds</StyledCardHeading>
            <Button link={SITE_LINKS.CLIENTS_LANDING_PAGE}>Find talent</Button>
          </StyledCard>
        </StyledCardContainer>
      </Container>
    </div>
  );
};

export default LandingPage;
