import styled from "styled-components";

export const CartGrid = styled.section`
  display: grid;
  grid: 1fr / 1fr;
  gap: 1em;
  flex-grow: 1;
`;

export const List = styled.ul`
  flex-grow: 1;
  display: grid;
  grid: 1fr 4fr 1fr / auto;
  justify-content: center;
  align-items: start;
  gap: 25px 15px;
  border: 2px solid black;
  padding: 20px;
  overflow-x: scroll;

  & > li {
    grid-row: 2;
  }
`;

export const ControlsBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 2em;
  margin-top: 1em;
  padding: 1em;
`;

export const PaymentButton = styled.button`
  height: 50px;
  background-color: rgb(106, 204, 204);
  padding: 1em;
  border-radius: 0.5em;
`;
