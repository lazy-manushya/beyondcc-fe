import React from "react";

import { IAppLogoProps } from "./AppLogo.types";
import { StyledAppLogo } from "./AppLogo.styles";

const AppLogo: React.FC<IAppLogoProps> = ({ className, variant }) => {
  return (
    <StyledAppLogo href="/" className={className} $variant={variant}>
      BeyondCC
    </StyledAppLogo>
  );
};

export default AppLogo;
