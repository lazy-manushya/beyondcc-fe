import React from "react";

import { HEADER_ITEMS } from "~/config/header";
import { StyledHeaderNav, StyledLink } from "../Header.styles";

const HeaderNav: React.FC = () => {
  return (
    <StyledHeaderNav>
      <ul>
        {HEADER_ITEMS.map((item, i) => (
          <li key={i}>
            <StyledLink href={item.link}>{item.name}</StyledLink>
          </li>
        ))}
      </ul>
    </StyledHeaderNav>
  );
};

export default HeaderNav;
