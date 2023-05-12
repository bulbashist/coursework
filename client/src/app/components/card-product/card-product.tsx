import { useNavigate } from "react-router";
import { IProduct } from "../../types";
import { Price, Product, Image, Header } from "./styles";
import Counter from "../counter/counter";
import { getMediaUri } from "../../services/get-media";

type Props = {
  product: IProduct & { count?: number };
};

const CardProduct = ({ product }: Props) => {
  const navigate = useNavigate();

  return (
    <Product
      onClick={() => {
        navigate(`/products/${product.id}`);
      }}
    >
      <Header>{product.name}</Header>
      <Image width={100} height={100} src={getMediaUri(product.media)} alt="" />
      {product.count ? <Counter id={product.id} count={product.count} /> : null}
      <Price>{product.price}$</Price>
    </Product>
  );
};

export default CardProduct;
