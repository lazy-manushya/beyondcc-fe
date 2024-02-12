/* eslint-disable @next/next/no-img-element */
import React from "react";

import { FOOTER_LINKS, SOCIAL_LINKS } from "~/config/links";
import Logo from "~/features/app/Logo";
import Container from "~/components/layout/Container";

import {
  StyledBottomContainer,
  StyledCopyrightText,
  StyledFooter,
  StyledLink,
  StyledSiteNav,
  StyledSocialLink,
  StyledSocialNav,
  StyledTopContainer,
} from "./Footer.styles";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledTopContainer>
          <Logo />

          <StyledSiteNav>
            <ul>
              {FOOTER_LINKS.map(({ sectionTitle, links }, i) => (
                <li key={i}>
                  <ul>
                    <li>{sectionTitle}</li>
                    {links.map(({ content, link }, i) => (
                      <li key={i}>
                        <StyledLink href={link}>{content}</StyledLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </StyledSiteNav>
        </StyledTopContainer>

        <StyledBottomContainer>
          <StyledSocialNav>
            <ul>
              {SOCIAL_LINKS.map(({ title, link, icon }, i) => (
                <li key={i}>
                  <StyledSocialLink href={link}>
                    <img src={icon} alt={title} />
                  </StyledSocialLink>
                </li>
              ))}
            </ul>
          </StyledSocialNav>

          <StyledCopyrightText>
            © Himozo talent consulting Pvt. Ltd. all rights reserved 2024
          </StyledCopyrightText>
        </StyledBottomContainer>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
