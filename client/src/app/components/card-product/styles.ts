import styled from "styled-components";

export const Product = styled.li`
  align-self: stretch;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 20px;
  padding: 15px 20px;
  box-shadow: 5px 3px 2px grey;
  cursor: pointer;
  width: 150px;
`;

export const Header = styled.h3`
  flex-grow: 1;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
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
