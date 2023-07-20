import Header from "../../components/header/header";
import CardProduct from "../../components/card-product/card-product";
import { useAppSelector } from "../../hooks";
import { initiatePayment, printCheck } from "../../services/payment";
import { connection } from "../../services/ws-connection";
import { OrderStatus } from "../orders/types";
import { CartGrid, ControlsBlock, List, PaymentButton } from "./styles";
import { CartOrderDTO } from "./types";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { resetCart } from "./slice";

const CartPage = () => {
  const products = useAppSelector((state) => state.cart);
  const clientId = useAppSelector((state) => state.auth.id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    connection.connect("ws://localhost:5000", "");
    return () => connection.close();
  }, []);

  const paymentHandler = async () => {
    const response = await initiatePayment();
    if (response && products.length !== 0) {
      connection.socket?.once("createOrder", async (ticket) => {
        await printCheck(products, ticket);
        dispatch(resetCart());
        navigate("/");
      });

      connection.emit("createOrder", {
        time: new Date(Date.now()).toUTCString(),
        products,
        clientId,
        status: OrderStatus.PROCEEDING,
      } as CartOrderDTO);
    }
  };

  return (
    <>
      <Header />
      <CartGrid>
        <List>
          {products.map((slice) => {
            return (
              <CardProduct
                key={slice.product.id}
                product={{ ...slice.product, count: slice.count }}
              />
            );
          })}
        </List>
        <ControlsBlock>
          <p>
            Всего :{" "}
            {products
              .reduce(
                (sum, slice) => sum + slice.product.price * slice.count,
                0
              )
              .toFixed(2)}
          </p>
          <PaymentButton onClick={() => paymentHandler()}>
            Оплатить
          </PaymentButton>
        </ControlsBlock>
      </CartGrid>
    </>
  );
};

//TODO
export default CartPage;
