import { IProduct } from "../../types";
import { IOrder } from "../orders/types";

export type test = {
  product: IProduct;
  count: number;
};

export type CartOrderDTO = Pick<IOrder, "clientId" | "status" | "time"> & {
  products: test[];
};
