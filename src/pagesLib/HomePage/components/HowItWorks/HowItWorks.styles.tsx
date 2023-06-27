import { styled } from "styled-components";

import { getViewPortHeightCssString } from "~/styles";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: ${getViewPortHeightCssString(50)};
  background: var(--clr-primary);
  color: var(--clr-accent);

  --s: 25vmin;
  --p: calc(var(--s) / 2);
  --c1: var(--clr-primary);
  --c3: white;
  --bg: var(--c3);
  --d: 4000ms;
  --e: cubic-bezier(0.76, 0, 0.24, 1);

  background-color: var(--bg);
  background-image: linear-gradient(45deg, var(--c1) 25%, transparent 25%),
    linear-gradient(-45deg, var(--c1) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--c1) 75%),
    linear-gradient(-45deg, transparent 75%, var(--c1) 75%);
  background-size: var(--s) var(--s);
  background-position: calc(var(--p) * 1) calc(var(--p) * 0),
    calc(var(--p) * -1) calc(var(--p) * 1),
    calc(var(--p) * 1) calc(var(--p) * -1),
    calc(var(--p) * -1) calc(var(--p) * 0);
  background-clip: text;
  color: rgba(#fff, 0);

  @keyframes position {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 5000%;
    }
  }

  animation: position 600s linear infinite forwards;
`;

export const StepsHeading = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 900;
`;

export const StepsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: 2rem;
`;

export const StepsListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  flex: 1;
  border: 2px solid var(--clr-accent);
  min-height: 240px;
  text-align: center;
  font-size: 32px;
  /* color: var(--clr-accent); */
  font-weight: 900;

  b {
    display: block;
    font-size: 96px;
  }

  animation: position 600s linear infinite forwards;
`;
