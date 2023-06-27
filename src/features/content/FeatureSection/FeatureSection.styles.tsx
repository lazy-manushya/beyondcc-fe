import { styled } from "styled-components";

export const StyledSection = styled.section<{ $reversed?: boolean }>`
  display: flex;
  ${({ $reversed }) => ($reversed ? "flex-direction: row-reverse" : "")}
`;

export const StyledImage = styled.img`
  width: 50%;
  background-color: var(--clr-accent);
  align-self: stretch;
`;

export const StyledContentSection = styled.div`
  width: 50%;
  padding: 2rem;
`;

export const StyledHeading = styled.h3`
  font-size: 40px;
`;

export const StyledContent = styled.p`
  font-size: 22px;
`;
