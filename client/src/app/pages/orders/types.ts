import { CartProduct } from "../cart/slice";

export enum OrderStatus {
  UNPAID = 0,
  IDLE = 1,
  PROCEEDING = 2,
  COMPLETED = 3,
}

export interface IOrder {
  id: number;
  clientId: number | null;
  status: OrderStatus;
  time?: string;
  products: CartProduct[];
  ticket?: number;
}

export type CreateIOrderDto = Omit<IOrder, "id">;
