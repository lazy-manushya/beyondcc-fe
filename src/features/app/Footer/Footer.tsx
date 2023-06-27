import React from "react";

import AppLogo from "~/features/app/AppLogo";

import FooterNav from "./components/FooterNav";
import SocialSection from "./components/SocialSection";
import { IFooterProps } from "./Footer.types";
import { StyledContentContainer, StyledFooter } from "./Footer.styles";

const Footer: React.FC<IFooterProps> = () => {
  return (
    <StyledFooter>
      <StyledContentContainer>
        <AppLogo variant="white" className="d-none d-md-inline-flex" />

        <FooterNav />

        <SocialSection className="mt-5 mt-md-0" />
      </StyledContentContainer>
    </StyledFooter>
  );
};

export default Footer;
