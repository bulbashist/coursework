import styled from "styled-components";
import { BaseShadow, CSSColors } from "../../../../styles/g-styles";

export const AsideMenu = styled.aside``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .active {
    background-color: ${CSSColors.Green};
    transform: translate(40px);
  }
`;

export const ListElement = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  padding: 1.5em;
  font-size: 12px;
  word-wrap: break-word;
  transition: translate 1s linear;
  background-color: rgba(255, 255, 255, 0.8);
  ${BaseShadow}
  cursor: pointer;

  &:not(.active):hover {
    translate: 40px;
  }
`;
