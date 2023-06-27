import React from "react";

import { APP_VERSION } from "~/config/app";
import Footer from "~/features/app/Footer";

import { IAppLayoutProps } from "./AppLayout.types";
import {
  StyledAppVersion,
  StyledContainer,
  StyledHeader,
  StyledMain,
} from "./AppLayout.styles";

const AppLayout: React.FC<IAppLayoutProps> = ({ children, className }) => {
  return (
    <StyledContainer className={className}>
      <StyledHeader />
      <StyledMain>{children}</StyledMain>
      <Footer />

      <StyledAppVersion>V {APP_VERSION}</StyledAppVersion>
    </StyledContainer>
  );
};

export default AppLayout;
