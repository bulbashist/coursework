import styled from "styled-components";
import { BaseShadow } from "../../styles/g-styles";

export const BaseHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4em;
  box-sizing: border-box;
  min-height: 8vh;
  margin-bottom: 2vh;
  ${BaseShadow}
  padding: 1vh 2em;
`;

export const BackBtn = styled.button`
  aspect-ratio: 1 / 1;
  align-self: center;
  width: 4em;
  height: 3em;
  box-sizing: border-box;
  text-align: center;
  line-height: 1em;
  ${BaseShadow}
`;

export const NavBlock = styled.nav`
  flex-grow: 1;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2em;
`;

export const AuthBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2em;
`;

export const AuthBtn = styled.button`
  ${BaseShadow}
  padding: 1em;
`;
