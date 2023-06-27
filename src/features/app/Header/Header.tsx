import React from "react";

import AppLogo from "~/features/app/AppLogo";

import HeaderNav from "./components/HeaderNav";
import { IHeaderProps } from "./Header.types";
import { StyledContentHeader, StyledHeader } from "./Header.styles";

const Header: React.FC<IHeaderProps> = ({ className }) => {
  return (
    <StyledHeader className={className}>
      <StyledContentHeader>
        <AppLogo className="h-100" />

        <HeaderNav />
      </StyledContentHeader>
    </StyledHeader>
  );
};

export default Header;
