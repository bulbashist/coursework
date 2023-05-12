import styled from "styled-components";

export const BaseHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4em;
  box-sizing: border-box;
  min-height: 4em;
  margin-bottom: 20px;
  border: 2px solid black;
  padding: 1em 2em;
`;

export const BackBtn = styled.button`
  aspect-ratio: 1 / 1;
  align-self: center;
  width: 3.5em;
  height: 3.5em;
  border: 2px solid black;
  border-radius: 50%;
  // padding: 1em;
  box-sizing: border-box;
  text-align: center;
  line-height: 1em;
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
  border: 2px solid black;
  border-radius: 1.5em;
  padding: 1em;
`;
