import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { IProduct } from "../../types";
import { addToCart } from "../cart/slice";
import { useDispatch } from "react-redux";
import Header from "../../components/header/header";
import {
  Count,
  CounterWrapper,
  ImageWrapper,
  SubmitBtn,
  Wrapper,
} from "./styles";
import { getMediaUri } from "../../services/get-media";

type IProductDTO = Omit<IProduct, "count">;

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProductDTO>();
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get<IProductDTO>(
        `http://${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/api/products/${id}`
      );
      setProduct(response.data);
    };

    getProduct();
  }, [id]);

  if (!product) return <h1>Not Found</h1>;

  return (
    <>
      <Header />
      <Wrapper>
        <h2>{product.name}</h2>
        <ImageWrapper>
          <img src={getMediaUri(product.media)} alt="" />
        </ImageWrapper>
        <CounterWrapper onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setCount((count) => count - 1)}
            disabled={count <= 1 ? true : false}
          >
            -
          </button>
          <Count>{count}</Count>
          <button onClick={() => setCount((count) => count + 1)}>+</button>
        </CounterWrapper>
        <SubmitBtn
          onClick={() => {
            dispatch(
              addToCart({
                product,
                count,
              })
            );
            navigate("/");
          }}
        >
          Добавить в корзину
        </SubmitBtn>
      </Wrapper>
    </>
  );
};

export default ProductPage;
