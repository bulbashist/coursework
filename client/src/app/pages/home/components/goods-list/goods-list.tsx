import { List, Pagination, Panel, ProceedBtn } from "./styles";
import { useMarkup, useProducts } from "./hooks";
import CardProduct from "../../../../components/card-product/card-product";
import { Component, useEffect, useRef, useState } from "react";
import { getProducts } from "../../slice";
import { useAppDispatch } from "../../../../hooks";
import { IProduct } from "../../../../types";
import { ReactPaginateProps } from "react-paginate";
import { useNavigate } from "react-router";

const GoodsList = () => {
  const dispatch = useAppDispatch();
  const products = useProducts();
  const { productsPerPage, ref } = useMarkup();

  const [currentItems, setCurrentItems] = useState([] as IProduct[]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const endOffset = itemOffset + productsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / productsPerPage));
  }, [itemOffset, products, productsPerPage]);

  const paginationHandler = ({ selected }: { selected: number }) => {
    const newOffset = (selected * productsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    const elem = document.querySelector(".page-pagination a") as HTMLElement;
    if (elem) elem.click();
  }, [products]);

  const pagRef = useRef<Component<ReactPaginateProps>>(null);

  return (
    <>
      <List ref={ref}>
        {currentItems.map((product) => {
          return <CardProduct key={product.id} product={product} />;
        })}
      </List>
      <Panel>
        <ProceedBtn onClick={() => navigate("/cart")}>
          Перейти к корзине
        </ProceedBtn>
        <Pagination
          ref={pagRef}
          onPageChange={paginationHandler}
          pageCount={pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          previousLabel="👈"
          nextLabel="👉"
          pageClassName="page-pagination"
          previousClassName="prev"
          nextClassName="next"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </Panel>
    </>
  );
};

export default GoodsList;
