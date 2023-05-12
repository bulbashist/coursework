import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 2em 0;
`;

export const ImageWrapper = styled.div`
  @media (max-width: 768px) {
    width: 50%;
  }

  @media (min-width: 780px) {
    height: 350px;
  }

  aspect-ratio: 1 / 1;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  box-sizing: border-box;
  width: 40%;
  height: 1.5em;
  border: 1px solid black;
  border-radius: 1.25em;
  padding: 0.25em 0.5em;
  font-size: 36px;

  * {
    flex-grow: 1;
    font: normal 500 36px/18px Arial;
    background-color: inherit;
  }
`;

export const Count = styled.p`
  width: 30%;
  text-align: center;
  line-height: 1em;
`;

export const SubmitBtn = styled.button`
  width: 40%;
  border: 1px solid black;
  border-radius: 2.5em;
  padding: 1em;
  background-color: rgb(100, 100, 255, 0.2);
  font-size: 18px;
`;
