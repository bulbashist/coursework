import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { useAppSelector } from "../../../../hooks";

const useProducts = () => {
  const { products, filter } = useAppSelector((state) => state.products);
  return useMemo(() => {
    return products.filter((product) => product.category === filter);
  }, [products, filter]);
};

/*
  150: card width
  15: gap
  20: padding
*/
const useMarkup = () => {
  const [productsPerPage, setProductsPerPage] = useState(0);
  const ref = useRef<HTMLUListElement>(null);
  useLayoutEffect(() => {
    const updateSize = () => {
      if (ref.current) {
        setProductsPerPage(
          Math.floor((ref.current.clientWidth + 15 - 20 * 2) / (150 + 15)) * 2
        );
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return { productsPerPage, ref };
};

export { useProducts, useMarkup };
