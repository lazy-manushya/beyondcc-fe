"use client";
import styled from "styled-components";

export const Styledheading = styled.h1``;

export const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const StyledCard = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  background: #f7f7f7;
  padding: 2rem;

  &:first-child {
    background: #f1f9f0;
  }
`;

export const StyledCardHeading = styled.div``;
