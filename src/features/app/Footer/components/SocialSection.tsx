import React from "react";

import { FOOTER_SOCIAL_ITEMS } from "~/config/footer";
import {
  StyledSocialSection,
  StyledLink,
  StyledSocialSectionHeading,
} from "../Footer.styles";

const SocialSection: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <StyledSocialSection className={className}>
      <StyledSocialSectionHeading>Get social</StyledSocialSectionHeading>

      <ul className="mt-2 mt-md-3">
        {FOOTER_SOCIAL_ITEMS.map((item, i) => (
          <li key={i}>
            <StyledLink href={item.link}>
              <i className={item.iconString} />
            </StyledLink>
          </li>
        ))}
      </ul>
    </StyledSocialSection>
  );
};

export default SocialSection;
