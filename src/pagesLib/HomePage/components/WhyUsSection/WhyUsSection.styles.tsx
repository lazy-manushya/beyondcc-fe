import { Container } from "reactstrap";
import { styled } from "styled-components";

import { getViewPortHeightCssString } from "~/styles";

export const StyledSection = styled.div`
  background: var(--clr-primary);
  color: var(--clr-accent);
`;

export const StyledContainer = styled(Container)`
  display: flex;
  min-height: ${getViewPortHeightCssString(100, "- var(--header-height)")};
  padding-block: 2rem;

  & > * {
    flex: 1;
  }
`;

export const StyledImage = styled.div`
  align-self: stretch;
  display: grid;
  place-content: center;
  background: #fff;
  color: red;
`;
