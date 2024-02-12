import React from "react";

import Header from "~/features/app/Header";
import Footer from "~/features/app/Footer";

import { StyledContainer, StyledMain } from "./MainLayout.styles";
import { IMainLayoutProps } from "./MainLayout.types";

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <StyledContainer>
      <Header />

      <StyledMain>{children}</StyledMain>

      <Footer />
    </StyledContainer>
  );
};

export default MainLayout;
