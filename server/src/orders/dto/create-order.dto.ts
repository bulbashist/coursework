export class CreateOrderDto {
  clientId: number | null;
  status: number;
  time?: string;
  products: [];
}
