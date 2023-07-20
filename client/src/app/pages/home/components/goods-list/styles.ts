import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { BaseShadow, CSSColors } from "../../../../styles/g-styles";

export const List = styled.ul`
  display: grid;
  grid: 1fr 1fr / repeat(auto-fill, 150px);
  justify-content: center;
  align-items: start;
  gap: 25px 15px;

  padding: 20px;
  ${BaseShadow}
`;

export const Panel = styled.section`
  grid-area: 2 / 1 / span 1 / span 2;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ProceedBtn = styled.button`
  width: 10em;
  height: 60%;
  background-color: ${CSSColors.Green};
  ${BaseShadow}
`;

export const Pagination = styled(ReactPaginate)`
  display: flex;
  flex-direction: row;
  gap: 1em;
  height: 100%;
  align-items: center;

  li {
    width: 2.5em;
    height: 50%;
    border-radius: 50%;
    cursor: pointer;
    ${BaseShadow}

    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .active {
    background-color: ${CSSColors.Green};
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
