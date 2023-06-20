import React from "react";
import { Col, Row } from "reactstrap";

import { FOOTER_ITEMS } from "~/config/footer";

import { StyledFooterNav, StyledLink } from "../Footer.styles";

const FooterNav: React.FC = () => {
  return (
    <StyledFooterNav>
      <Row tag="ul">
        {FOOTER_ITEMS.map((item, i) => (
          <Col tag="li" xs="6">
            <StyledLink href={item.link}>{item.name}</StyledLink>
          </Col>
        ))}
      </Row>
    </StyledFooterNav>
  );
};

export default FooterNav;
