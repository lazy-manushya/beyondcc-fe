import React from "react";

import Footer from "~/features/app/Footer";

import { IAppLayoutProps } from "./AppLayout.types";
import { StyledContainer, StyledHeader, StyledMain } from "./AppLayout.styles";

const AppLayout: React.FC<IAppLayoutProps> = ({ children, className }) => {
  return (
    <StyledContainer className={className}>
      <StyledHeader />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledContainer>
  );
};

export default AppLayout;
