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

export const StyledAppVersion = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 14px;
  color: #fff;
  background: var(--clr-accent);
`;
