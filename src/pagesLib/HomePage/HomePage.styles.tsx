import { styled } from "styled-components";

import { getViewPortHeightCssString } from "~/styles";

export const StyledContainer = styled.div`
  min-height: ${getViewPortHeightCssString(100, "- var(--header-height)")};
`;
