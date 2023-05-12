import styled from "styled-components";
import { OrderStatus } from "./types";

export const OrdersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
  height: fit-content;
`;

export const OrderBlock = styled.li`
  display: grid;
  grid: 0.5fr 1.5fr / 1fr 10em;
  padding: 2em;
  border-radius: 25px;
  gap: 10px 15px;
  background-color: #adc4c4;
  border: 4px dashed;

  &.order-status-${OrderStatus.UNPAID} {
    border-color: red;
  }

  &.order-status-${OrderStatus.IDLE} {
    border-color: orange;
  }

  &.order-status-${OrderStatus.PROCEEDING} {
    border-color: yellow;
  }

  &.order-status-${OrderStatus.COMPLETED} {
    border-color: green;
  }
`;

export const ProductsBlock = styled.ul`
  grid-area: 2 / 1 / 2 / 1;
  display: grid;
  grid: 1fr / repeat(auto-fill, 150px);
  gap: 15px;
  justify-content: center;
  justify-self: stretch;
`;

export const ControlsBlock = styled.ul`
  grid-area: 1 / 2 / span 2 / 2;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 250px;

  * {
    flex: 1 0 auto;
  }
`;

export const Product = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 1em;
  width: 150px;
  border: 1px solid black;
`;

export const ImageWrapper = styled.div`
  @media (max-width: 768px) {
    width: 50%;
  }

  @media (min-width: 780px) {
    height: 50px;
  }

  // height: 200px;
  aspect-ratio: 1 / 1;

  img {s
    width: 100%;
    height: 100%;
  }
`;
