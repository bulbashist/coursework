import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const List = styled.ul`
  display: grid;
  grid: 1fr 1fr / repeat(auto-fill, 150px);
  justify-content: center;
  align-items: start;
  gap: 25px 15px;
  box-shadow: 2px 2px 5px grey;
  border-radius: 10px;
  padding: 20px;
`;

export const Product = styled.li`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 20px;
  padding: 15px 20px;
  box-shadow: 5px 3px 2px grey;
  cursor: pointer;
`;

export const Image = styled.img`
  display: block;
  // flex: 1 0 auto;
  width: 100%;
  aspect-ratio: 1 / 1;
  border: 1px solid red;
  border-radius: 20px;
`;

export const Price = styled.p`
  align-self: end;
`;

export const OrderButton = styled.button`
  border-radius: 20px;
  padding: 5px 20px;
`;

export const Panel = styled.section`
  grid-area: 2 / 1 / span 1 / span 2;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ProceedBtn = styled.button`
  width: 10em;
  border-radius: 2em;
  background-color: rgb(106, 204, 204);
`;

export const Pagination = styled(ReactPaginate)`
  grid-area: 2 / 1 / span 1 / span 2;
  display: flex;
  flex-direction: row;
  gap: 1em;
  // width: 50%;

  li {
    width: 2em;
    height: 2em;
    border: 2px solid black;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 2px 2px 5px grey;

    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .active {
    background-color: rgb(106, 204, 204);
  }

  .prev,
  .next {
    a {
      line-height: 1.5em;
    }
  }

  .page-pagination {
    a {
      line-height: 2em;
    }
  }
`;
