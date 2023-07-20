import styled from "styled-components";
import { ApperanceAnimation, BaseShadow } from "../../styles/g-styles";

export const Product = styled.li`
  align-self: stretch;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex-basis: 150px;
  padding: 15px 20px;
  ${BaseShadow}
  animation: ${ApperanceAnimation} 0.5s;
  cursor: pointer;
`;

export const Header = styled.h3`
  flex-grow: 1;
  box-sizing: border-box;
  width: 100%;
  font: normal 500 15px/24px Arial;
  word-wrap: break-word;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  border: 1px solid red;
  border-radius: 20px;
`;

export const Price = styled.p`
  align-self: end;
`;
