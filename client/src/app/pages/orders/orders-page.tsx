import { useEffect } from "react";
import { useAppSelector } from "../../hooks";
import {
  ControlsBlock,
  ImageWrapper,
  OrderBlock,
  OrdersList,
  Product,
  ProductsBlock,
} from "./styles";
import { OrderStatus } from "./types";
import { DeleteBtn } from "../../styles/g-styles";
import { connection } from "../../services/ws-connection";
import Header from "../../components/header/header";
import { getMediaUri } from "../../services/get-media";

const OrdersPage = () => {
  const token = useAppSelector((state) => state.auth.accessToken);
  const orders = useAppSelector((state) => state.orders);

  useEffect(() => {
    if (token) {
      connection.connect("ws://localhost:5000", token ?? "");
      connection.emit("findAllOrders");
      return () => connection.close();
    }
  }, [token]);

  return (
    <>
      <Header />
      <section style={{ height: "fit-content" }}>
        <OrdersList>
          {orders.map((order) => {
            return (
              <OrderBlock
                key={order.id}
                className={`order-status-${order.status}`}
              >
                <h3>Заказ №{order.ticket}</h3>
                <ProductsBlock>
                  {order.products.map((slice) => {
                    return (
                      <Product key={slice.product.id}>
                        <h4>{slice.product.name}</h4>
                        <ImageWrapper>
                          <img src={getMediaUri(slice.product.media)} alt="" />
                        </ImageWrapper>
                        <p>Count: {slice.count}</p>
                      </Product>
                    );
                  })}
                </ProductsBlock>
                <ControlsBlock>
                  <button
                    disabled={order.status === OrderStatus.PROCEEDING}
                    onClick={() =>
                      connection.emit("updateOrder", {
                        id: order.id,
                        status: OrderStatus.PROCEEDING,
                      })
                    }
                  >
                    Взять заказ
                  </button>
                  <button
                    disabled={order.status === OrderStatus.COMPLETED}
                    onClick={() =>
                      connection.emit("updateOrder", {
                        id: order.id,
                        status: OrderStatus.COMPLETED,
                      })
                    }
                  >
                    Пометить как выполненный
                  </button>
                  <DeleteBtn
                    onClick={() => connection.emit("removeOrder", order.id)}
                  >
                    Delete order
                  </DeleteBtn>
                </ControlsBlock>
              </OrderBlock>
            );
          })}
        </OrdersList>
      </section>
    </>
  );
};

export default OrdersPage;
