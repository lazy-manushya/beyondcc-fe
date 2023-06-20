import React from "react";

import { IContainerProps } from "./Container.types";
import { StyledContainer } from "./Container.styles";

const Container: React.FC<IContainerProps> = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
