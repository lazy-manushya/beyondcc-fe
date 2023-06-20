import { styled } from "styled-components";

import { getViewPortHeightCssString } from "~/styles";
import Header from "~/features/app/Header";

export const StyledMain = styled.main`
  padding-bottom: 5rem;
`;

export const StyledHeader = styled(Header)`
  position: sticky;
  top: 0;
`;

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: ${getViewPortHeightCssString()};

  ${StyledMain} {
    flex-grow: 1;
  }
`;
