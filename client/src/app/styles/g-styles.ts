import styled, { createGlobalStyle, css, keyframes } from "styled-components";

const BaseShadow = css`
  box-shadow: 3px 3px 4px grey, 0 0 2px grey;
  border-radius: 1em;
`;

const ApperanceAnimation = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

enum CSSColors {
  Green = "rgba(176, 219, 205, 0.8)",
  Blue = "rgb(106, 204, 204)",
}

export const DeleteBtn = styled.button`
  flex-grow: 1;
  border-radius: 0.5em;
  background-color: red;

  &:hover {
    background-color: orange;
  }
`;

const GlobalStyles = createGlobalStyle`
  $green-color: rgba(176, 219, 205, 0.8);
`;

export { CSSColors, BaseShadow, ApperanceAnimation };
export default GlobalStyles;
