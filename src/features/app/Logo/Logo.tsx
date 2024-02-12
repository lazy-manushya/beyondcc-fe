import React from "react";

import { SITE_LINKS } from "~/config/links";

import { StyledLogo } from "./Logo.styles";

const Logo: React.FC = () => {
  return (
    <StyledLogo href={SITE_LINKS.HOME_PAGE}> 
    </StyledLogo>
  );
};

export default Logo;
