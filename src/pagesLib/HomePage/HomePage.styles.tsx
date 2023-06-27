import { styled } from "styled-components";

import FeatureSection from "~/features/content/FeatureSection";

import { getViewPortHeightCssString } from "~/styles";

export const StyledContainer = styled.div`
  min-height: ${getViewPortHeightCssString(100, "- var(--header-height)")};
`;

export const StyledFeatureSection = styled(FeatureSection)`
  min-height: ${getViewPortHeightCssString(40)};
`;
