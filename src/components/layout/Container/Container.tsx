import React from "react";

import { StyledContainer } from "./Container.styles";
import { IContainerProps } from "./Container.types";

const Container: React.FC<IContainerProps> = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
