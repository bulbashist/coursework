import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  box-sizing: border-box;
  width: 100%;
  height: 2.5em;
  border: 1px solid black;
  border-radius: 1.25em;
  padding: 0.25em 0.5em;
  font: normal 500 18px/18px Arial;

  * {
    flex-grow: 1;
    font-size: inherit;
    background-color: inherit;
  }
`;

export const Input = styled.p`
  width: 40%;
  text-align: center;
  line-height: 2em;
`;
