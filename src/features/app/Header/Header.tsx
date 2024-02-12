import React, { useCallback } from "react";

import { HEADER_LINKS } from "~/config/links";
import Logo from "~/features/app/Logo";
import Button from "~/components/input/Button";

import {
  StyledContainer,
  StyledHeader,
  StyledLink,
  StyledNav,
} from "./Header.styles";

const Header: React.FC = () => {
  const handleLogin = useCallback(() => {
    alert("Login nmethod not implemented");
  }, []);

  return (
    <StyledHeader>
      <StyledContainer>
        <Logo />

        <StyledNav>
          <ul>
            {HEADER_LINKS.map(({ content, link }, i) => (
              <li key={i}>
                <StyledLink href={link}>{content}</StyledLink>
              </li>
            ))}
          </ul>
        </StyledNav>

        <Button variant="ghost" onClick={handleLogin}>
          Sign in
        </Button>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
