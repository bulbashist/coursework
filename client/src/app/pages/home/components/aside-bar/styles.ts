import styled from "styled-components";

export const AsideMenu = styled.aside``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .active {
    background-color: rgba(176, 219, 205, 0.8);
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
  border-radius: 15px;
  padding: 1.5em;
  font-size: 12px;
  word-wrap: break-word;
  // word-break: break-all;
  transition: translate 1s linear;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 2px 2px 5px grey;
  cursor: pointer;

  &:not(.active):hover {
    translate: 40px;
  }
`;
