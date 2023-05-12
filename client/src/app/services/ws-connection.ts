import { Socket, io } from "socket.io-client";
import { store } from "../store";
import {
  addOrder,
  changeOrderStatus,
  deleteOrder,
} from "../pages/orders/store-slice";
import { IOrder } from "../pages/orders/types";
import { getOrders } from "../pages/orders/store-slice";

class WSConnection {
  socket: Socket | null;

  constructor() {
    this.socket = null;
  }

  connect(uri: string, token: string) {
    this.socket = io(uri, {
      auth: {
        token,
      },
    });

    if (token) {
      this.socket.on("findAllOrders", (payload: IOrder[]) => {
        store.dispatch(getOrders(payload));
      });

      this.socket.on("createOrder", (payload: IOrder) => {
        store.dispatch(addOrder(payload));
      });

      this.socket.on("updateOrder", (payload: any) => {
        store.dispatch(changeOrderStatus(payload));
      });

      this.socket.on("removeOrder", (payload: number) => {
        store.dispatch(deleteOrder(payload));
      });
    }
  }

  emit(event: string, ...args: any) {
    this.socket?.emit(event, ...args);
    // this.close();
  }

  close() {
    this.socket?.disconnect();
  }
}

export const connection = new WSConnection();
